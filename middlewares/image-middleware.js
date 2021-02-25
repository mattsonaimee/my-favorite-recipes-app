const multer = require('multer');

// this function makes it so only images can be passed into the database
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    // eslint-disable-next-line node/no-callback-literal
    cb('Please upload only images.', false);
  }
};

// use multer disk Storage engine
const storage = multer.diskStorage({
  // determines folder to store uploaded files
  destination: (req, file, cb) => {
    // may need to change to just /images since public folder is static
    // eslint-disable-next-line no-undef
    cb(null, __basedir + '/public/images/uploads/');
  },
  // determines name of file inside destination folder
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-Everyday-Recipes-${file.originalname}`);
  }
});

const uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;
