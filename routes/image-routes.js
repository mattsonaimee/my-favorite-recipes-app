const express = require('express');
const router = express.Router();
const uploadController = require("../controllers/image-controller");
const upload = require("../middlewares/image-middleware");

// router.get('/store-image', imageController.imageUploadForm);
// 'SELECT * FROM images WHERE image_name =?';

router.post('/store-image' , upload.single("file"), uploadController.uploadFiles);


// router.get('/display-image', imageController.displayImage);
// 'SELECT image_name FROM images'
module.exports = router;



