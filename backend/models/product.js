const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    url: {
        type: String,
        required: 'url can\'t be empty',
    },
    name: {
        type: String,
        required: 'name can\'t be empty',
    },
    type: {
        type: String,
        required: 'Type can\'t be empty',
    },
    prize: {
        type: Number,
        required: 'Prize can\'t be empty',
    },
    saltSecret: String
});
mongoose.model('Product', userSchema);