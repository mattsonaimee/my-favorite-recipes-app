/* eslint-disable no-undef */
const fs = require('fs');
const db = require('../models');
const Image = db.Image;

// get and check uploaded file from req.file
const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    // eslint-disable-next-line eqeqeq
    if (req.file == undefined) {
      return res.send('You must select a file.');
    }
    // use create mode to save image info
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      // get data from images folder
      data: fs.readFileSync(
        __basedir + '/public/images/uploads/' + req.file.filename
      )
      // write file to images folder with name & data
    }).then((image) => {
      fs.writeFileSync(
        __basedir + '/public/images/temp/' + image.name,
        image.data
      );

      return res.send('File has been uploaded.');
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles
};