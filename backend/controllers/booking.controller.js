const mongoose = require('mongoose');
const User = mongoose.model('Cashier');
const Booking = mongoose.model('Booking');
const User1 = mongoose.model('User');
const Notification = mongoose.model('Notification');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
const pass="123456"
const type="cashier"
mongoose.connect('mongodb://localhost/mongoose');



module.exports.register = (req, res, next) => {
    var booking = new Booking();
    booking.payment = req.body.payment;
    booking.reserveddate = req.body.reserveddate;
    booking.bookingdate = req.body.bookingdate;
    booking.closedate = req.body.closedate;
    booking.contact = req.body.contact;
    
    booking.guestcount = req.body.guestcount;
    booking.duration = req.body.duration;
    booking.status = req.body.status;
    booking.lastname = req.body.lastname;
    booking.address = req.body.address;
    booking.email = req.body.email;
    booking.password = req.body.password;
    booking.saltSecret = req.body.saltSecret;

    booking.save((err, doc) => {
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

module.exports.update_booking = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    var ins ={
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        email: req.body.email,
    };
    User.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cashier Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.delete_cashier = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
   User.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cashier Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

module.exports.view_cashier = (req, res, next) => {
    User.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });
}

