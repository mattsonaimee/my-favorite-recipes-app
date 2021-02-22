//dependencies
const multer = require('multer');
const imageMiddleware = require('../middlewares/image-middleware');
const imageModel = require('../models/image-model');


module.exports={
    imageUploadForm:function(req, res) {
        const upload = multer({
            storage: imageMiddleware.image.storage(),
            allowedImage: imageMiddleware.image.allowedImage})
            .single('image');
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                res.send(err);
            } else if (err) {
                res.send(err);
            } else{
                //stores image in database
                const imageName = req.file.originalname;
                const inputValues = {
                    image_name: imageName
                }
                //calls model
            imageModel.storeImage(inputValues, function(data) {
                res.render('upload-form', {alertMsg:data})
            })
        }
        })
    }
}