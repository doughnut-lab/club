const mongoose = require('mongoose');
const Suwimmingpool = mongoose.model('Suwimmingpool');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
// mongoose.connect('mongodb://localhost/mongoose');

//add Suwimmingpool 
module.exports.add_suwimmingpool = (req, res, next) => {
    var suwimmingpool = new Suwimmingpool();
    suwimmingpool.poolnumber = req.body.poolnumber;
    suwimmingpool.state = req.body.state;
    suwimmingpool.saltSecret = req.body.saltSecret;

    suwimmingpool.save((err, doc) => {
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

//update Suwimmingpool details
module.exports.update_suwimmingpool = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    var ins ={
        poolnumber : req.body.poolnumber,
        state : req.body.state
    };
    Suwimmingpool.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cashier Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

//delete Suwimmingpool
module.exports.delete_suwimmingpool = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
   Suwimmingpool.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cashier Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

//view Suwimmingpool
module.exports.view_suwimmingpool = (req, res, next) => {
    Suwimmingpool.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Suwimmingpool :' + JSON.stringify(err, undefined, 2));}
    });
}

//view Suwimmingpool by id
module.exports.view_suwimmingpool_id = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');

    Suwimmingpool.findById(req.params.id,(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Suwimmingpool :' + JSON.stringify(err, undefined, 2));}
    });
}