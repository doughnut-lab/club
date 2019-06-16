const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title can\'t be empty',
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
    },
    message: {
        type: String,
        required: 'Message can\'t be empty',
        
    },
    saltSecret: String
});
mongoose.model('Notification', userSchema);