const mongoose = require('mongoose');
const User = mongoose.model('History');
const Instructor = mongoose.model('Instructor');
const User1 = mongoose.model('User');
const Notification = mongoose.model('Notification');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
const pass="1234"
const type="instructor"

module.exports.enter_history = (req, res, next) => {
    var user = new User();
    user.customer_name = req.body.customer_name;
    user.tel = req.body.tel;
    user.instructor = req.body.instructor;
    user.date = req.body.date;
    user.time = req.body.time;
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

module.exports.view_history = (req, res, next) => {
    User.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });
}

module.exports.view_person_history = (req, res, next) => {
    User.find({instructor:req.params.instructor},(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });



}

module.exports.register_instructor = (req, res, next) => {
    var user = new Instructor();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.address = req.body.address;
    user.email = req.body.email;
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

module.exports.update_instructor = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    
    var ins ={
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        email: req.body.email,
        
    };
    Instructor.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in instructor Update :' + JSON.stringify(err, undefined, 2)); }
    });


}
module.exports.delete_instructor = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
   Instructor.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in instructor Delete :' + JSON.stringify(err, undefined, 2)); }

 });

}
module.exports.view_instructor = (req, res, next) => {
    Instructor.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });
}

module.exports.user_ins_register = (req, res, next) => {
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

module.exports.ins_notification = (req, res, next) => {
    var user = new Notification();
    user.title = req.body.title;
    user.email = req.body.email;
    user.message = req.body.message;
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

module.exports.view_instructor_notification = (req, res, next) => {
    Notification.find({email:req.params.email},(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });
}