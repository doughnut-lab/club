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
    saltSecret: String
});

mongoose.model('Booking', userSchema);