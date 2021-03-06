const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    customername: {
        type: String
    },
    breakfast: {
        type: Boolean
    },
    lunch: {
        type: Boolean
    },
    dinner: {
        type: Boolean
    },
    contact: String,
    foodlist:{
        type: Array
    },
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
    swimmingpoolno: {
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

mongoose.model('Swimmingpool_Booking', userSchema);