const mongoose = require('mongoose');
const Table = mongoose.model('Table');
var ObjectId =require('mongoose').Types.ObjectId;
const passport = require('passport');
const _ = require('lodash');
mongoose.connect('mongodb://localhost/mongoose');

//add table
module.exports.add_table = (req, res, next) => {
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

//update Table details
module.exports.update_table = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    var ins ={
        tablenumber = req.body.tablenumber,
        chaircount = req.body.chaircount,
        location = req.body.location,
        description = req.body.description,
        state = req.body.state,
        saltSecret = req.body.saltSecret
    };
    Table.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cashier Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

//delete Table
module.exports.delete_table = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
   Table.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in Cashier Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

//view Table
module.exports.view_tables = (req, res, next) => {
    Table.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving Table :' + JSON.stringify(err, undefined, 2));}
    });
}


// module.exports.view_tables = (req, res, next) => {
//     console.log("start view1");
//     Table.find((err, docs) => {
//         if(!err) {
//             console.log("start view");
//             res.send(docs); 
//         }
//         else {
//             console.log('Error in Retriving User :');
//         }
//     });
// }