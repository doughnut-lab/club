var multer = require("multer");
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/images/tourguides");//path tp store an image
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});

FileController.prototype.upload = multer({
  storage: storage
});

FileController.prototype.delete=(key,callback)=>{
  fs.unlink(
    key, callback
  )
}


function FileController() {}

module.exports = FileController;
