const express=require('express');
const UserController=require('../controllers/UserController');
const router=express.Router();

router.get('/categoryGraph',UserController.categoryGraph);
module.exports=router;