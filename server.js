// dependencies
const express = require('express');
const imageRouter = require('./routes/image-routes');
const path = require('path');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/', imageRouter);
require('./routes/html-routes.js')(app);
require('./routes/image-routes.js')(app);

// listening
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});