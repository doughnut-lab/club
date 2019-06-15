const mongoose = require('mongoose');
const Hall = mongoose.model('Hall');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
mongoose.connect('mongodb://localhost/mongoose');

module.exports.addhall = (req, res, next) => {
    var hall = new Hall();
    hall.hallnumber = req.body.hallnumber;
    hall.chaircount = req.body.chaircount;
    hall.gustcount = req.body.gustcount;
    hall.description = req.body.description;
    hall.state = req.body.state;
    hall.saltSecret = req.body.saltSecret;

    hall.save((err, doc) => {
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






