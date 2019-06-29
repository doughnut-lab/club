const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    tablenumber: {
        type: Number
    },
    chaircount: {
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

mongoose.model('Table', userSchema);
