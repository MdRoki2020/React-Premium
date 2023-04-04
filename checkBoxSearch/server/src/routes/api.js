const express=require('express');
const UserController=require('../controllers/UserController')
const router=express.Router();


router.get('/searchProducts',UserController.searchProducts);


module.exports=router;