// Requiring path to so we can use relative routes to our HTML files
const path = require('path');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middlewares/isAuthenticated');

module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get('/', (req, res) => {
    // If the user is already logged in, send them to the app page. If not, send them to the login page.
    if (req.user) {
      res.redirect('/app');
    }
    res.sendFile(path.join(__dirname, '../public/login.html'))
  });

  // login route loads login.html
  app.get('/login', (req, res) => {
    if (req.user) {
      res.redirect('./app');
    }
    res.sendFile(path.join(__dirname, '../public/login.html'))
  });

  // signup route loads signup.html
  app.get('/signup', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/signup.html'))
  );

  // app route loads app.html
  // Here we add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get('/app', isAuthenticated, (req, res) =>
    res.sendFile(path.join(__dirname, '../public/app.html'))
  );

  // add route loads recipeadd.html
  // Here we add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get('/add', isAuthenticated, (req, res) =>
    res.sendFile(path.join(__dirname, '../public/recipeadd.html'))
  );

  // view route loads recipeview.html
  // Here we add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get('/view', isAuthenticated, (req, res) =>
    res.sendFile(path.join(__dirname, '../public/recipeview.html'))
  );
};