const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    imgurl: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    catogory: {
        type: String
    },
    saltSecret: String
});

mongoose.model('Gallery', userSchema);
