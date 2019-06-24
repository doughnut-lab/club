const mongoose = require('mongoose');
const Hall = mongoose.model('Hall');
var ObjectId =require('mongoose').Types.ObjectId;
const _ = require('lodash');
// mongoose.connect('mongodb://localhost/mongoose');

module.exports.add_hall = (req, res, next) => {
    var hall = new Hall();
    hall.hallnumber = req.body.hallnumber;
    hall.chaircount = req.body.chaircount;
    hall.gustcount = req.body.gustcount;
    hall.description = req.body.description;
    hall.state = req.body.state;
    hall.saltSecret = req.body.saltSecret;

    hall.save((err, doc) => {
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

//update Hall details
module.exports.update_hall = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    var ins ={
        hallnumber : req.body.hallnumber,
        chaircount : req.body.chaircount,
        gustcount : req.body.gustcount,
        description : req.body.description,
        state : req.body.state
    };
    Hall.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cashier Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

//delete Hall
module.exports.delete_hall = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
   Hall.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cashier Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

//view Hall
module.exports.view_hall = (req, res, next) => {
    Hall.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Hall :' + JSON.stringify(err, undefined, 2));}
    });
}

//view Hall by id
module.exports.view_hall_id = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

    Hall.findById(req.params.id,(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Hall :' + JSON.stringify(err, undefined, 2));}
    });
}