var multer = require("multer");
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public");//path tp store an image
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});



FileController.prototype.upload = multer({
  storage: storage
});

function FileController() {}

module.exports = FileController;
