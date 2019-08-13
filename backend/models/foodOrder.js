const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: 'foodName can\'t be empty',
    },
    type: {
        type: String,
        required: 'type can\'t be empty',
    },
    price: {
        type: Number,
        required: 'price can\'t be empty',
    }
    
});
mongoose.model('foodOrder', userSchema);