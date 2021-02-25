const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/image-controller');
const uploadMid = require('../middlewares/image-middleware');

// router.get('/store-image', imageController.imageUploadForm);
// 'SELECT * FROM images WHERE image_name =?';
// eslint-disable-next-line prefer-const
let routes = (app) => {
//   router.get('/store-image',
//   );

  router.post(
    '/store-image',
    uploadMid.single('file'),
    uploadController.uploadFiles
  );
};

module.exports = routes;
