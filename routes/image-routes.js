const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const uploadController = require('../controllers/imageController');
const uploadMid = require('../config/middleware/imageMiddleware');

// eslint-disable-next-line prefer-const
let routes = (app) => {
  router.get('/', homeController.getHome);

  router.post(
    '/api/recipes',
    uploadMid.single('file'),
    uploadController.uploadFiles
  );

  return app.use('/', router);
};

module.exports = routes;
