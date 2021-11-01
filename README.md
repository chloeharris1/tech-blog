# Tech Blog

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Link](#link)
- [Questions](#questions)

<br />

## Description 
A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts. 

This app follows the MVC paradigm architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation
To use this application, clone the repository to your local machine:
```
git clone git@github.com:chloeharris1/tech-blog.git
```

After cloning, you will need to create a .env file including the variables below in order for the application to run.
``` 
DB_USER='root'
DB_PW='mySql password'
DB_NAME='techblog_db'
```
Next, install the dependencies with command:
```
npm init 
```
```
npm install mysql2
```
```
npm install sequelize
```
```
npm install dotenv
```

## Usage
When you want to run the application, type the below into your terminal command line:
```
mysql -u root -p
(Enter password) 
exit
```
```
source db/schema.sql
```
```
npm run seed
```
```
npm start
```

## Questions

If you have any questions about the project, contact me at: 
chloe.a.harris17@gmail.com <br />
Check out my GitHub profile at: 
[chloeharris1](https://github.com/chloeharris1/) <br />

