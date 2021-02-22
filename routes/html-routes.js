const path = require('path');

module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '')))

}