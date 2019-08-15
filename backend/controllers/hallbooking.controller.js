const mongoose = require('mongoose');
const Hall_Booking = mongoose.model('Hall_Booking');
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

//add new hall_Booking
module.exports.register = (req, res, next) => {
    console.log("came to register")
    var hall_Booking = new Hall_Booking();

    hall_Booking.day = req.body.day;
    hall_Booking.night = req.body.night;
    hall_Booking.customername = req.body.customername;
    hall_Booking.contact = req.body.contact;
    hall_Booking.address = req.body.address;
    hall_Booking.email = req.body.email;
    hall_Booking.reserveddate = req.body.reserveddate;
    hall_Booking.bookingdate = req.body.bookingdate;
    hall_Booking.hallnumber = req.body.hallnumber;
    hall_Booking.hallnumber = req.body.hallnumber;
    hall_Booking.state = req.body.state;
    hall_Booking.price = req.body.price;
    hall_Booking.ispaid = req.body.ispaid;

    hall_Booking.saltSecret = req.body.saltSecret;
    
    hall_Booking.save((err, doc) => {
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

//update hall_Booking details
module.exports.update_booking = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    var ins ={
        day : req.body.day,
        night : req.body.night,
        customername : req.body.customername,
        contact : req.body.contact,
        address : req.body.address,
        email : req.body.email,
        reserveddate : req.body.reserveddate,
        bookingdate : req.body.bookingdate,
        hallnumber : req.body.hallnumber,
        state : req.body.state,
        price : req.body.price,
        ispaid : req.body.ispaid,
        saltSecret : req.body.saltSecret,
    };
    Hall_Booking.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cashier Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

//delete hall_Booking
module.exports.delete_booking = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
   Hall_Booking.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cashier Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

//view hall_Booking
module.exports.view_booking = (req, res, next) => {
    Hall_Booking.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Hall_Booking :' + JSON.stringify(err, undefined, 2));}
    });
}

//filter date
module.exports.filter_date =(req, res, next) => {
    Hall_Booking.find({reserveddate: req.params.bookingdate})
}

//find hall_Booking by id
module.exports.view_booking_id = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');  

    Hall_Booking.findById(req.params.id,(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Hall_Booking :' + JSON.stringify(err, undefined, 2));}
    });
}

