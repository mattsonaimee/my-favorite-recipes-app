const multer = require('multer');

module.exports.image={
    storage:function() {
        const storage = multer.diskStorag({
            destination: function (req, file, cb) {
                cb(null, 'public/images/')
            },
            filename: function (req, file, cb){
                cb(null, file.originalname)
            }
        })
        return storage;
    },
    allowedImage:function(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            req.fileValidatorError = 'Images Only, Please';
            return cb(new Error('Images Only, Please'), false);
        }
        cb(null, true);
    }
}