/* eslint-disable node/no-path-concat */
const path = require('path');

const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../public/app.html`));
};

module.exports = {
  getHome: home
};