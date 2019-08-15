const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    namelist: [{
        type: String,
        required: 'name can\'t be empty',
    }],
    saltSecret: String
});
mongoose.model('Orderproduct', userSchema);