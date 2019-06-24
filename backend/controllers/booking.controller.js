const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');
var ObjectId =require('mongoose').Types.ObjectId;
const _ = require('lodash');
// mongoose.connect('mongodb://localhost/mongoose');

//add new booking
module.exports.register = (req, res, next) => {
    var booking = new Booking();
    booking.amount = req.body.amount;
    booking.reserveddate = req.body.reserveddate;
    booking.bookingdate = req.body.bookingdate;
    booking.starttime  = req.body.starttime;
    booking.endtime = req.body.endtime;
    booking.status = req.body.status;
    booking.tablenumber = req.body.tablenumber;
    booking.hallnumber = req.body.hallnumber;
    booking.swimmingpoolnumber = req.body.swimmingpoolnumber;
    booking.billiardtablenumber = req.body.billiardtablenumber;
    booking.customername = req.body.customername;
    booking.contact = req.body.contact;
    booking.foodlist = req.body.foodlist;
    booking.address = req.body.address;
    booking.email = req.body.email;
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

//update booking details
module.exports.update_booking = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    var ins ={
        amount: req.body.amount,
        reserveddate : req.body.reserveddate,
        bookingdate : req.body.bookingdate,
        starttime  : req.body.starttime,
        endtime : req.body.endtime,
        status : req.body.status,
        tablenumber : req.body.tablenumber,
        hallnumber : req.body.hallnumber,
        swimmingpoolnumber : req.body.swimmingpoolnumber,
        billiardtablenumber : req.body.billiardtablenumber,
        customername : req.body.customername,
        contact : req.body.contact,
        foodlist : req.body.foodlist,
        address : req.body.address,
        email : req.body.email
    };
    Booking.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cashier Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

//delete booking
module.exports.delete_booking = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
   Booking.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cashier Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

//view booking
module.exports.view_booking = (req, res, next) => {
    Booking.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Booking :' + JSON.stringify(err, undefined, 2));}
    });
}

