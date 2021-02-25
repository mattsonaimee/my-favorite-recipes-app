const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const uploadController = require('../controllers/image-controller');
const uploadMid = require('../middlewares/image-middleware');

// eslint-disable-next-line prefer-const
let routes = (app) => {
  router.get('/', homeController.getHome);

  router.post(
    '/store-image',
    uploadMid.single('file'),
    uploadController.uploadFiles
  );

  return app.use('/', router);
};

module.exports = routes;
