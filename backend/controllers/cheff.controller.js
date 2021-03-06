const mongoose = require('mongoose');
const User = mongoose.model('Cheff');
const User1 = mongoose.model('User');
const User2 = mongoose.model('Orderproduct');
const Notification = mongoose.model('Notification');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
const pass="1234"
const type="cheff"
const accountSid = 'AC35b07c0fb85a8dac36b031af16f58a8b';
const authToken = 'a1d0a803e1c76fe0b13461b0304f388b';
const client = require('twilio')(accountSid, authToken);


module.exports.register_cheff = (req, res, next) => {
    var user = new User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.address = req.body.address;
    user.email = req.body.email;
    user.tel = req.body.tel;
    user.password = pass;
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

module.exports.update_cheff = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    
    var ins ={
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        email: req.body.email,
        tel:req.body.tel,
        
    };
    User.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cheff Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.delete_cheff = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
   User.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cheff Delete :' + JSON.stringify(err, undefined, 2)); }

 });

}

module.exports.view_cheff = (req, res, next) => {
    User.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });



}
module.exports.view_cheff_assign = (req, res, next) => {
    User2.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });



}
module.exports.user_cheff_register = (req, res, next) => {
    var user = new User1();
    user.username = req.body.firstname;
    user.email = req.body.email;
    user.password = pass;
    user.type = type;
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
module.exports.cheff_notification = (req, res, next) => {
    client.messages.create({body: req.body.message, from: '+14805256961', to: req.body.tel},
            function (err,data) {
                 if(err){
                     console.log("error : " + err)
                 }console.log(data)
             })
}
