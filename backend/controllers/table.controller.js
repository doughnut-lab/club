const mongoose = require('mongoose');
const Table = mongoose.model('Table');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
mongoose.connect('mongodb://localhost/mongoose');

module.exports.addtable = (req, res, next) => {
    var table = new Table();
    table.tablenumber = req.body.tablenumber;
    table.chaircount = req.body.chaircount;
    table.location = req.body.location;
    table.description = req.body.description;
    table.state = req.body.state;
    table.saltSecret = req.body.saltSecret;

    table.save((err, doc) => {
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