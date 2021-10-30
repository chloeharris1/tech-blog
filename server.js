//  Server for Tech Blog 

// Dependencies 
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const path = require('path')

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

// Set handlebars as the template engine for the server
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Give server the path to the public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


// Turn on connection to db and to the server
// force: true resets the database and clears all values, updating any new relationships
// force: false maintains data
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});