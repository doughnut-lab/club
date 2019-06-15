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
        default: "Not received"
    },
    saltSecret: String
});

mongoose.model('Hall', userSchema);