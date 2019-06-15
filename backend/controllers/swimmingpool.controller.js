const mongoose = require('mongoose');
const Suwimmingpool = mongoose.model('Suwimmingpool');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
mongoose.connect('mongodb://localhost/mongoose');

module.exports.addsuwimmingpool = (req, res, next) => {
    var suwimmingpool = new Suwimmingpool();
    suwimmingpool.poolnumber = req.body.poolnumber;
    suwimmingpool.state = req.body.state;
    suwimmingpool.saltSecret = req.body.saltSecret;

    suwimmingpool.save((err, doc) => {
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