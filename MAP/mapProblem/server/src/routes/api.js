const express=require('express');
const UserController=require('../controllers/UserController')
const router=express.Router();


router.post('/PlacePost',UserController.PlacePost);
router.get('/PlaceGet',UserController.PlaceGet);


module.exports=router;