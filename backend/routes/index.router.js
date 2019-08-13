const express = require('express');
const router = express.Router();
var path = require("path");
var cors = require('cors');
const keys =require('../config/config');

//controllers
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
const ctrlGallery=require('../controllers/gallery.controller');
const ctrlFoodOrder=require('../controllers/foodOrder.controller')

const jwtHelper = require('../config/jwtHelper');
 
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

//cheff
router.post('/cheff_no',ctrlCheff.cheff_notification);
router.post('/register_cheff',ctrlCheff.register_cheff);
router.put('/update_cheff/:id',ctrlCheff.update_cheff);
router.delete('/delete_cheff/:id',ctrlCheff.delete_cheff);
router.get('/view_cheff',ctrlCheff.view_cheff);
router.post('/user_cheff_register',ctrlCheff.user_cheff_register);

//cashier
router.post('/cashier_no',ctrlCashier.cashier_notification);
router.post('/user_cashier_register',ctrlCashier.user_cashier_register);
router.get('/view_cashier',ctrlCashier.view_cashier);
router.post('/register_cashier',ctrlCashier.register_cashier);
router.put('/update_cashier/:id',ctrlCashier.update_cashier);
router.delete('/delete_cashier/:id',ctrlCashier.delete_cashier);

//instructor
router.post('/register_instructor',ctrlInstructor.register_instructor);
router.put('/update_instructor/:id',ctrlInstructor.update_instructor);
router.delete('/delete_instructor/:id',ctrlInstructor.delete_instructor);
router.get('/view_instructor',ctrlInstructor.view_instructor);
router.get('/view_instructor_notification/:email',ctrlInstructor.view_instructor_notification);
router.post('/ins_no',ctrlInstructor.ins_notification);
router.post('/user_ins_register',ctrlInstructor.user_ins_register);
router.get('/view_person_history/:instructor',ctrlInstructor.view_person_history);
router.post('/enter_history',ctrlInstructor.enter_history);
router.get('/view_history',ctrlInstructor.view_history);
router.post('/accept',ctrlInstructor.accept);
router.post('/cancel',ctrlInstructor.cancel);

//customer
router.post('/customer_register',ctrlCustomer.customer_register);

//booking
router.post('/booking',ctrlBooking.register);
router.get('/view_booking',ctrlBooking.view_booking);
router.put('/update_booking/:id',ctrlBooking.update_booking);
router.delete('/delete_booking/:id',ctrlBooking.delete_booking);

//table
router.post('/table',ctrlTable.add_table);
router.get('/view_table',ctrlTable.view_tables);
router.get('/view_table/:id',ctrlTable.view_table_id);
router.put('/update_table/:id',ctrlTable.update_table);
router.delete('/delete_table/:id',ctrlTable.delete_table);

//hall
router.post('/hall',ctrlHall.add_hall);
router.get('/view_hall',ctrlHall.view_hall);
router.get('/view_hall/:id',ctrlHall.view_hall_id);
router.put('/update_hall/:id',ctrlHall.update_hall);
router.delete('/delete_hall/:id',ctrlHall.delete_hall);

//summingpool
router.post('/swimmingpool',ctrlSwimming.add_suwimmingpool);
router.get('/view_swimmingpool',ctrlSwimming.view_suwimmingpool);
router.get('/view_swimmingpool/:id',ctrlSwimming.view_suwimmingpool_id);
router.put('/update_swimmingpool/:id',ctrlSwimming.update_suwimmingpool);
router.delete('/delete_swimmingpool/:id',ctrlSwimming.delete_suwimmingpool);

//billiardtable
router.post('/billiardtable',ctrlBilliard.add_billiardtable);
router.get('/view_billiardtable',ctrlBilliard.view_billiardtable);
router.get('/view_billiardtable/:id',ctrlBilliard.view_billiardtable_id);
router.put('/update_billiardtable/:id',ctrlBilliard.update_billiardtable);
router.delete('/delete_billiardtable/:id',ctrlBilliard.delete_billiardtable);

//gallery
router.post('/gallery',ctrlGallery.add_gallery);
router.get('/view_gallery',ctrlGallery.view_gallerys);
router.put('/update_gallery/:id',ctrlGallery.update_gallery);
router.delete('/delete_gallery/:id',ctrlGallery.delete_gallery);

//foodOrder
router.post('/add_foodOrder',ctrlFoodOrder.add_foodOrder);
router.put('/update_foodOrder/:id',ctrlFoodOrder.update_foodOrder);
router.get('/view_foodOrder',ctrlFoodOrder.view_foodOrder);
router.delete('./delete_foodOrder/:id',ctrlFoodOrder.delete_foodOrderByCheff);


module.exports = router;