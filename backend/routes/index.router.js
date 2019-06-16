const express = require('express');
const router = express.Router();
var path = require("path");
var cors = require('cors');

// var cookieParser = require("cookie-parser");
// var bodyParser = require("body-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");
// const passport = require('passport');
const keys =require('../config/config');
// const passportSetup =require('./src/config/passport-setup');
// const cookieSession =require('cookie-session');
// var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname + 'public')); //Serves resources from public folder


var server = app.listen(5000);
 
const ctrlUser =require('../controllers/user.controller');
const ctrlInstructor=require('../controllers/instructor.controller');
const ctrlCheff=require('../controllers/cheff.controller');
const ctrlCashier=require('../controllers/cashier.controller');
const ctrlCustomer=require('../controllers/customer.controller');
const ctrlBooking=require('../controllers/booking.controller');
const ctrlTable=require('../controllers/table.controller');
const ctrlHall=require('../controllers/hall.controller');
const ctrlSwimming=require('../controllers/swimmingpool.controller');
const ctrlBilliard=require('../controllers/billiardtable.controlller');
// const ctrlImage=require('../controllers/iamges.controller');

const jwtHelper = require('../config/jwtHelper');
 
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/enter_history',ctrlInstructor.enter_history);
router.get('/view_history',ctrlInstructor.view_history);
router.get('/view_person_history/:instructor',ctrlInstructor.view_person_history);
router.post('/register_instructor',ctrlInstructor.register_instructor);
router.post('/register_cheff',ctrlCheff.register_cheff);
router.post('/register_cashier',ctrlCashier.register_cashier);
router.put('/update_cashier/:id',ctrlCashier.update_cashier);
router.delete('/delete_cashier/:id',ctrlCashier.delete_cashier);
router.put('/update_cheff/:id',ctrlCheff.update_cheff);
router.delete('/delete_cheff/:id',ctrlCheff.delete_cheff);
router.put('/update_instructor/:id',ctrlInstructor.update_instructor);
router.delete('/delete_instructor/:id',ctrlInstructor.delete_instructor);
router.get('/view_instructor',ctrlInstructor.view_instructor);
router.get('/view_cheff',ctrlCheff.view_cheff);
router.get('/view_cashier',ctrlCashier.view_cashier);
router.post('/user_ins_register',ctrlInstructor.user_ins_register);
router.post('/user_cheff_register',ctrlCheff.user_cheff_register);
router.post('/user_cashier_register',ctrlCashier.user_cashier_register);
router.post('/ins_no',ctrlInstructor.ins_notification);
router.post('/cheff_no',ctrlCheff.cheff_notification);
router.post('/cashier_no',ctrlCashier.cashier_notification);
router.get('/view_instructor_notification/:email',ctrlInstructor.view_instructor_notification);
router.post('/customer_register',ctrlCustomer.customer_register);
router.post('/booking',ctrlBooking.register);
router.post('/table',ctrlTable.addtable);
router.get('/view_tables',ctrlTable.view_tables);
router.post('/hall',ctrlHall.addhall);
router.post('/suwimmingpool',ctrlSwimming.addsuwimmingpool);
router.post('/billiardtable',ctrlBilliard.addbilliardtable);
// router.post('/upload_image',ctrlImage.upload_image);
module.exports = router;