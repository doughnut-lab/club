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
    price: {
        type: String
    },
    saltSecret: String
});

mongoose.model('Table', userSchema);
