// dependencies
const express = require('express');
const path = require('path');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');

global.__basedir = __dirname;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));

require('./routes/html-routes.js')(app);
require('./routes/recipe-routes.js')(app);
require('./routes/image-routes.js')(app);

// listening
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});