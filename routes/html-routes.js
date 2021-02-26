const path = require('path');

module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get('/', (req, res) => {
    console.log('Redirecting to login');
    res.sendFile(path.join(__dirname, '../public/login.html'))
  }
  );

  // login route loads login.html
  app.get('/login', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/login.html'))
  );

  // signup route loads signup.html
  app.get('/signup', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/signup.html'))
  );

  // index route loads index.html
  app.get('/app', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/app.html'))
  );

  // add route loads recipeadd.html
  app.get('/add', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/recipeadd.html'))
  );

  // view route loads recipeview.html
  app.get('/view', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/recipeview.html'))
  );
};