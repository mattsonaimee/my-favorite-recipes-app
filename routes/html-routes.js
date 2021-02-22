const path = require('path');

module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
  );

  // add route loads recipeadd.html
  app.get('/add', (req, res) =>
  res.sendFile(path.join(__dirname, '/recipeadd.html'))
  );

  // view route loads recipeview.html
  app.get('/view', (req, res) => 
  res.sendFile(path.join(__dirname, '/recipeview.html'))
  );

};