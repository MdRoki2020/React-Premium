const express=require('express');
const UserController=require('../controllers/UserController')
const router=express.Router();


router.post('/PostVideo',UserController.PostVideo);
router.get('/GetVideo',UserController.GetVideo);


module.exports=router;