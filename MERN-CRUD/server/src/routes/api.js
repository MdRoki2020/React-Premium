const express=require('express');

const FoodController=require("../controllers/FoodsController");
const UserController=require('../controllers/UserController');
const router=express.Router();

//Food management
router.post('/CreateFood',FoodController.CreateFood);
router.get('/ReadFood',FoodController.ReadFood);
router.get('/ReadById/:id',FoodController.ReadById);
router.post('/UpdateFood/:id',FoodController.UpdateFood);
router.get('/DeleteFood/:id',FoodController.DeleteFood);


//User Management
router.post('/CreateUser',UserController.CreateUser);

module.exports=router;