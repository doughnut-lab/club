const mongoose = require('mongoose');
const foodOrder = mongoose.model('foodOrder');
var ObjectId =require('mongoose').Types.ObjectId;
// const foodOrder = mongoose.model('foodOrder');

module.exports.add_orderFood = (req, res, next) => {
    var fOrder = new foodOrder();
    fOrder.customerName = req.body.customerName;
    fOrder.food = req.body.food;
    fOrder.date1 = req.body.date1;
    fOrder.cheffName = req.body.cheffName;
    fOrder.date2 = req.body.date2;
    fOrder.orderDone = req.body.orderDone;

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
        customerName: req.body.customerName,
        food :req.body.food,
        date1 : req.body.date1,
        cheffName : req.body.cheffName,
        date2 : req.body.date2,
        orderDone : req.body.orderDone,
        
        
    };
    foodOrder.findByIdAndUpdate(req.params.id, { $set: ins},{ new: true},(err,doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in Cheff Update :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports.delete_foodOrderByCheff = (req, res, next) => {
    console.log('ishan');
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
