const mongoose =require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err)=> {
   if(!err){
       console.log('MongoDB connection succeeded.');
   }
   else{
       console.log('Error in MongoDB connection :' +JSON.stringify(err,undefined,2));
   }
});

require('./customer');
require('./user');
require('./ins_history');
require('./instructor');
require('./cashier');
require('./cheff');
require('./notification');
require('./booking');
require('./gallery');
require('./table');
require('./billiardtable');
require('./hall');
require('./swimmingpool');
