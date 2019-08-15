const mongoose = require('mongoose');
const User = mongoose.model('Product');
const User1 = mongoose.model('Orderproduct');
var ObjectId =require('mongoose').Types.ObjectId;

module.exports.enter_product = (req, res, next) => {
    var user = new User();
    user.url =req.body.url;
    user.name = req.body.name;
    user.type = req.body.type;
    user.prize = req.body.prize;
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

module.exports.view_product = (req, res, next) => {
    User.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });
}


// module.exports.view_product_details = (req, res, next) => {
//     User.find({customer_name:req.params.customer_name},(err, docs) => {
//         if(!err) {res.send(docs); }
//         else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
//     });
// }
module.exports.enter_products = (req, res, next) => {
    var user = new User1();
    user.namelist = req.body;
    console.log(user.namelist);
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