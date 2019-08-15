const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    customername: {
        type: String
    },
    day: {
        type: Boolean
    },
    night: {
        type: Boolean
    },
    contact: String,
    address: {
        type: String,
        required: 'address can\'t be empty',
    },
    email: {
        type: String,
        required: 'Email can\'t be empty'
    },
    reserveddate: {
        type: Date,
        default: Date.now
    },
    bookingdate: {
        type: Date,
        default: Date.now
    },
    hallno: {
        type: Number
    },
    state: {
        type: String,
        default: "Open"
    },
    price: {
        type: Number,
        default: '0'
    },
    ispaid: {
        type: String,
        default: "No"
    },
    saltSecret: String
});

mongoose.model('Hall_Booking', userSchema);