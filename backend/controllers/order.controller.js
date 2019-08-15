const mongoose = require('mongoose');
const User = mongoose.model('Product');
const User1 = mongoose.model('Orderproduct');
var ObjectId =require('mongoose').Types.ObjectId;
var state ="not complete";
var newstate ="complete";

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
    user.state=state;
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
module.exports.view_products = (req, res, next) => {
    User1.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });
}
module.exports.update_products = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    
    var ins ={
        // firstname: req.body.firstname,
        // lastname: req.body.lastname,
        // address: req.body.address,
        // email: req.body.email,
        // tel: req.body.tel,
        //user.namelist = req.body,
        state: newstate,
    };
    User1.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in instructor Update :' + JSON.stringify(err, undefined, 2)); }
    });
}
module.exports.view_product_state = (req, res, next) => {
    User1.find({state:req.params.state},(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });
}