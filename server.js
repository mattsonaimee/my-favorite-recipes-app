//dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8080;

var db = require("./models");

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware for handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('./public'));
require("./routes/html-routes.js")(app);
require("./routes/post-api-routes.js")(app);

//listening
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });