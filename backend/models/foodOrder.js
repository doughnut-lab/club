const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: 'customerName can\'t be empty',
    },
    food: {
        type: String,
        required: 'food can\'t be empty',
    },
    date1: {
        type: Date,
        required: 'date1 can\'t be empty',
    },
    cheffName: {
        type: String,
        required: 'cheffName can\'t be empty',
    },
    date2: {
        type: Date,
        required: 'date2 can\'t be empty',
    },
    orderDone: {
        type: Boolean,
        required: 'Email can\'t be empty',
    }
    
});
mongoose.model('foodOrder', userSchema);