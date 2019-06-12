const express = require('express');
const router = express.Router();
 
const ctrlUser =require('../controllers/user.controller');
const ctrlInstructor=require('../controllers/instructor.controller');
const ctrlCheff=require('../controllers/cheff.controller');
const ctrlCashier=require('../controllers/cashier.controller');
const ctrlCustomer=require('../controllers/customer.controller');

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
module.exports = router;