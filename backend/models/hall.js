const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    hallnumber: {
        type: Number
    },
    chaircount: {
        type: Number
    },
    gustcount: {
        type: Number
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    state: {
        type: String,
        default: [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    },
    saltSecret: String
});

mongoose.model('Hall', userSchema);