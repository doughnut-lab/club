const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    tablenumber: {
        type: Number
    },
    state: {
        type: String,
        default: "Not received"
    },
    saltSecret: String
});

mongoose.model('Billiardtable', userSchema);
