const mongoose = require('mongoose');
const Billiardtable = mongoose.model('Billiardtable');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
mongoose.connect('mongodb://localhost/mongoose');

module.exports.add_billiardtable = (req, res, next) => {
    var billiardtable = new Billiardtable();
    billiardtable.tablenumber = req.body.tablenumber;
    billiardtable.state = req.body.state;
    billiardtable.saltSecret = req.body.saltSecret;

    billiardtable.save((err, doc) => {
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

//update billiardtable details
module.exports.update_billiardtable = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    var ins ={
        tablenumber : req.body.tablenumber,
        state : req.body.state
    };
    Billiardtable.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cashier Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

//delete billiardtable
module.exports.delete_billiardtable = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
    Billiardtable.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cashier Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

//view billiardtable
module.exports.view_billiardtable = (req, res, next) => {
    Billiardtable.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Suwimmingpool :' + JSON.stringify(err, undefined, 2));}
    });
}