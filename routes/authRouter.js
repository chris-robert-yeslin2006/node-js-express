const express=require('express');
const authController=require('./../Controllers/authController');

const router=express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/forgotpassword').post(authController.forgotPassword);
router.route('/resetpassword').post(authController.resetPassword);

module.exports=router;