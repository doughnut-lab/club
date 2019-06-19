// required modules
var express = require("express");
var FileController = require("../controllers/file.controller");
var router = express.Router();
// var AuthGuideController = require("../controllers/authGuideController");


// var authGuideController = new AuthGuideController();
var fileController = new FileController();

// route for upload guideImage
router.post("/uploadimage", fileController.upload.single("file"), function(
  req,
  res,
  next
) {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

router.get("/", function(req,res,next){
  getGuideController.GetImages((err,docs) => {
      if(err){
          return next(err);
      }else {
          res.json(docs);
      }
  });
});

module.exports = router;
