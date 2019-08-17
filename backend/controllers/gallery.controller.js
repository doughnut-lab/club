const mongoose = require('mongoose');
const Gallery = mongoose.model('Gallery');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
// mongoose.connect('mongodb://localhost/mongoose');

//add gallery
module.exports.add_gallery = (req, res, next) => {
    var gallery = new Gallery();
    gallery.imgurl = req.body.imgurl;
    gallery.name = req.body.name;
    gallery.description = req.body.description;
    gallery.price = req.body.price;
    gallery.saltSecret = req.body.saltSecret;

    gallery.save((err, doc) => {
        if (!err)
            res.send(doc);
        else{
            if (err.code == 11000)
                res.status(422).send(['Duplicate Email Adress found.']);
            else
                return next(err);
        }
    });
}

//update gallery details
module.exports.update_gallery = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    var ins ={
      imgurl : req.body.imgurl,
      name : req.body.name,
      description : req.body.description,
      price : req.body.price,
      saltSecret : req.body.saltSecret
    };
    Gallery.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cashier Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

//delete gallery
module.exports.delete_gallery = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
    Gallery.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cashier Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

//view gallery
module.exports.view_gallerys = (req, res, next) => {
  Gallery.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving gallery :' + JSON.stringify(err, undefined, 2));}
    });
}


//view gallery by id
module.exports.view_gallery_id = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

    Gallery.findById(req.params.id,(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving gallery :' + JSON.stringify(err, undefined, 2));}
    });
}

//view gallery by catogory
module.exports.view_gallery_catogory = (req, res, next) => {
    // if(!ObjectId.isValid({catogory:req.params.catogory}))
    // return res.status(400).send('No record with given id : ${req.params.id}');
console.log("backend gallery route called")
    Gallery.find({catogory:req.params.catogory},(err, docs) => {
        console.log("gallery view")
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving gallery :' + JSON.stringify(err, undefined, 2));}
    });
}