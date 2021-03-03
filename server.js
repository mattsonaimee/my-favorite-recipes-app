// dependencies
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const path = require('path');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require('./models');

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.json({
  limit: '50mb'
}));
app.use(express.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Necessary directory establishment for NPM Multer
global.__basedir = __dirname;

// Requiring our routes
require('./routes/html-routes.js')(app);
require('./routes/user-routes.js')(app);
require('./routes/recipe-routes.js')(app);
require('./routes/image-routes.js')(app);

// listening
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  });
});