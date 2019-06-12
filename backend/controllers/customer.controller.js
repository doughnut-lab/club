const mongoose = require('mongoose');
const User = mongoose.model('Customer');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');

module.exports.customer_register = (req, res, next) => {
    var user = new User();
    user.username = req.body.username;
    user.googleid = req.body.googleid;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else{
            if (err.code == 11000)
                res.status(422).send(['Duplicate Email Adress found.']);
            else
                return next(err);
                
        }
    });
}