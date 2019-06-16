const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    poolnumber: {
        type: Number
    },
    state: {
        type: String,
        default: "Not received"
    },
    saltSecret: String
});

mongoose.model('Suwimmingpool', userSchema);
