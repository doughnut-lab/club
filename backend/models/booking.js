const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    payment: {
        type: String
    },
    reserveddate: {
        type: Date,
        default: Date.now
    },
    bookingdate: {
        type: Date
    },
    starttime: {
        type: Date
    },
    endtime: {
        type: Date
    },
    contact: String,
    guestcount: Number,
    duration: Number,
    status: {
        type: String,
        default: "Not received"
    },
    tablenumber:{
        type: Number,
        default: "-1"
    },
    hallnumber:{
        type: Number,
        default: "-1"
    },
    swimmingpoolnumber:{
        type: Number,
        default: "-1"
    },
    billiardtablenumber:{
        type: Number,
        default: "-1"
    },
    customername: {
        type: String
    },
    foodlist:{
        type: String
    },
    address: {
        type: String,
        required: 'address can\'t be empty',
    },
    email: {
        type: String,
        required: 'Email can\'t be empty'
    },
    saltSecret: String
});

mongoose.model('Booking', userSchema);