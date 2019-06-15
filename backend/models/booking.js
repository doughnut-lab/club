const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    payment: {
        type: String,
        required: 'FirstName can\'t be empty',
    },
    reserveddate: {
        type: Date,
        default: Date.now
    },
    bookingdate: {
        type: Date,
        default: Date.now
    },
    contact: String,
    guestcount: Number,
        duration: Number,
        status: {
        type: String,
        default: "active"
    },
    tablenumber:{
        type: Number
    },
    guidename: {
        type: String,
        default: "Not Assigned"
    },
    lastname: {
        type: String,
        required: 'LastName can\'t be empty',
    },
    address: {
        type: String,
        required: 'address can\'t be empty',
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
    saltSecret: String
});

mongoose.model('Booking', userSchema);
