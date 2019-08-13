const mongoose = require('mongoose');
const foodOrder = mongoose.model('foodOrder');
var ObjectId =require('mongoose').Types.ObjectId;
// const foodOrder = mongoose.model('foodOrder');

module.exports.add_foodOrder = (req, res, next) => {
    var fOrder = new foodOrder();
    fOrder.foodName = req.body.foodName;
    fOrder.type = req.body.type;
    fOrder.price = req.body.price;

    fOrder.save((err, doc) => {
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

module.exports.update_foodOrder = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send('No record with given id : ${req.params.id}');
    
    var ins ={
        foodName : req.body.foodName,
        type : req.body.type,
        price : req.body.price,
    
        
    };
    foodOrder.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cheff Update :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports.delete_foodOrderByCheff = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id : ${req.params.id}');   
    
   foodOrder.findByIdAndRemove(req.params.id, (err, doc) => {
     if(!err) { res.send(doc); }
     else {console.log('Error in instructor Delete :' + JSON.stringify(err, undefined, 2)); }
 });
}

module.exports.view_foodOrder = (req, res, next) => {
    foodOrder.find((err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });
}
