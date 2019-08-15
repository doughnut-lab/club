const mongoose = require('mongoose');
const Billiardtable_Booking = mongoose.model('Billiardtable_Booking');
var ObjectId =require('mongoose').Types.ObjectId;
const _ = require('lodash');

// Download the Node helper library from twilio.com/docs/node/install
// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = 'AC35b07c0fb85a8dac36b031af16f58a8b';
const authToken = '1234';
// const twilio = require('twilio');
// const client = new twilio(accountSid, authToken);
const client = require('twilio')(accountSid, authToken);





// mongoose.connect('mongodb://localhost/mongoose');

//add new Billiardtable_Booking
module.exports.register = (req, res, next) => {
    console.log("came to register")
    var billiardtable_Booking = new billiardtable_Booking();
    
    billiardtable_Booking.breakfast = req.body.breakfast;
    billiardtable_Booking.lunch = req.body.lunch;
    billiardtable_Booking.dinner = req.body.dinner;
    billiardtable_Booking.customername = req.body.customername;
    billiardtable_Booking.contact = req.body.contact;
    billiardtable_Booking.foodlist = req.body.foodlist;
    billiardtable_Booking.address = req.body.address;
    billiardtable_Booking.email = req.body.email;
    billiardtable_Booking.reserveddate = req.body.reserveddate;
    billiardtable_Booking.bookingdate = req.body.bookingdate;

    billiardtable_Booking.billiardtableno = req.body.billiardtableno;
    billiardtable_Booking.state = req.body.state;
    billiardtable_Booking.price = req.body.price;
    billiardtable_Booking.ispaid = req.body.ispaid;

    billiardtable_Booking.saltSecret = req.body.saltSecret;
    
    billiardtable_Booking.save((err, doc) => {
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

//update Billiardtable_Booking details
module.exports.update_booking = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    var ins ={
        breakfast : req.body.breakfast,
        lunch : req.body.lunch,
        dinner : req.body.dinner,
        customername : req.body.customername,
        contact : req.body.contact,
        foodlist : req.body.foodlist,
        address : req.body.address,
        email : req.body.email,
        reserveddate : req.body.reserveddate,
        bookingdate : req.body.bookingdate,
        billiardtableno : req.body.billiardtableno,
        state : req.body.state,
        price : req.body.price,
        ispaid : req.body.ispaid,
        saltSecret : req.body.saltSecret,
    };
    Billiardtable_Booking.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cashier Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

//delete Billiardtable_Booking
module.exports.delete_booking = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
   Billiardtable_Booking.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cashier Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

//view Billiardtable_Booking
module.exports.view_booking = (req, res, next) => {
    Billiardtable_Booking.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Billiardtable_Booking :' + JSON.stringify(err, undefined, 2));}
    });
}

//filter date
module.exports.filter_date =(req, res, next) => {
    Billiardtable_Booking.find({reserveddate: req.params.bookingdate})
}

//find Billiardtable_Booking by id
module.exports.view_booking_id = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');  

    Billiardtable_Booking.findById(req.params.id,(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Billiardtable_Booking :' + JSON.stringify(err, undefined, 2));}
    });
}

