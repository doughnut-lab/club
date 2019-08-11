const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');
var ObjectId =require('mongoose').Types.ObjectId;
const _ = require('lodash');

// Download the Node helper library from twilio.com/docs/node/install
// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = 'AC35b07c0fb85a8dac36b031af16f58a8b';
const authToken = '';
// const twilio = require('twilio');
// const client = new twilio(accountSid, authToken);
const client = require('twilio')(accountSid, authToken);





// mongoose.connect('mongodb://localhost/mongoose');

//add new booking
module.exports.register = (req, res, next) => {
    console.log("came to register")
    var booking = new Booking();
    
    booking.breakfast = req.body.breakfast;
    booking.lunch = req.body.lunch;
    booking.dinner = req.body.dinner;
    booking.customername = req.body.customername;
    booking.contact = req.body.contact;
    booking.foodlist = req.body.foodlist;
    booking.address = req.body.address;
    booking.email = req.body.email;
    booking.saltSecret = req.body.saltSecret;
    
    booking.save((err, doc) => {
        if (!err){
            // client.messages.create({body: 'Hi there!', from: '+14805256961', to: '+94703177445'},
            // function (err,data) {
            //     if(err){
            //         console.log("error : " + err)
            //     }console.log(data)
            // })
            res.send(doc);
        }       
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

//filter date
module.exports.filter_date =(req, res, next) => {
    Booking.find({reserveddate: req.params.bookingdate})
}

