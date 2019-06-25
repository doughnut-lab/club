const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: 'Name can\'t be empty',
    },
    customer_email: {
        type: String,
        required: 'Customer email can\'t be empty',
    },
    tel: {
        type: Number,
        required: 'Telephone number can\'t be empty',
    },
    instructor: {
        type: String,
        required: 'Instructor can\'t be empty',
    },
    instructor_name: {
        type: String,
        required: 'Instructor Name can\'t be empty',
    },
    date: {
        type: String,
        required: 'Email can\'t be empty',
        
    },
    time: {
        type: String,
        required: 'Password can\'t be empty'
    }
    
});
mongoose.model('History', userSchema);