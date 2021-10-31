// Dependencies 
const express = require('express');
const sequelize = require('./config/connection.js')
const session = require('express-session'); 
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

// Requiring our models for syncing
const { User, Post, Comment } = require('./models'); 
const routes = require("./controllers");

// Set handlebars as the template engine for the server
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Give server the path to the public directory for static files
app.use(express.static("public"));


// Sets up User session
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 2
     },
     store: new SequelizeStore({
        db:sequelize
     })
  }))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes)

// Turn on connection to db and to the server
// force: true resets the database and clears all values, updating any new relationships
// force: false maintains data
sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
    });
});