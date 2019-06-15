const mongoose = require('mongoose');
const Billiardtable = mongoose.model('Billiardtable');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
mongoose.connect('mongodb://localhost/mongoose');

module.exports.addbilliardtable = (req, res, next) => {
    var billiardtable = new Billiardtable();
    billiardtable.tablenumber = req.body.tablenumber;
    billiardtable.state = req.body.state;
    billiardtable.saltSecret = req.body.saltSecret;

    billiardtable.save((err, doc) => {
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