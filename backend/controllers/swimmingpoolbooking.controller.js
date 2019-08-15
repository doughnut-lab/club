const mongoose = require('mongoose');
const Swimmingpool_Booking = mongoose.model('Swimmingpool_Booking');
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

//add new swimming_booking
module.exports.register = (req, res, next) => {
    console.log("came to register")
    var swimming_booking = new Swimmingpool_Booking();
    
    swimming_booking.breakfast = req.body.breakfast;
    swimming_booking.lunch = req.body.lunch;
    swimming_booking.dinner = req.body.dinner;
    swimming_booking.customername = req.body.customername;
    swimming_booking.contact = req.body.contact;
    swimming_booking.foodlist = req.body.foodlist;
    swimming_booking.address = req.body.address;
    swimming_booking.email = req.body.email;
    swimming_booking.reserveddate = req.body.reserveddate;
    swimming_booking.bookingdate = req.body.bookingdate;

    swimming_booking.swimmingpoolno = req.body.swimmingpoolno;
    swimming_booking.state = req.body.state;
    swimming_booking.price = req.body.price;
    swimming_booking.ispaid = req.body.ispaid;

    swimming_booking.saltSecret = req.body.saltSecret;
    
    swimmingpool_Booking.save((err, doc) => {
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

//update swimming_booking details
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
        swimmingpoolno : req.body.swimmingpoolno,
        state : req.body.state,
        price : req.body.price,
        ispaid : req.body.ispaid,
        saltSecret : req.body.saltSecret,
    };
    Swimmingpool_Booking.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cashier Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

//delete swimming_booking
module.exports.delete_booking = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
    Swimmingpool_Booking.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cashier Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

//view swimming_booking
module.exports.view_booking = (req, res, next) => {
    Swimmingpool_Booking.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Booking :' + JSON.stringify(err, undefined, 2));}
    });
}

//filter date
module.exports.filter_date =(req, res, next) => {
    Swimmingpool_Booking.find({reserveddate: req.params.bookingdate})
}

//find swimming_booking by id
module.exports.view_booking_id = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');  

    Swimmingpool_Booking.findById(req.params.id,(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Booking :' + JSON.stringify(err, undefined, 2));}
    });
}

