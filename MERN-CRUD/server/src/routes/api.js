const express=require('express');

const FoodController=require("../controllers/FoodsController");
const router=express.Router();

//Create
router.post('/CreateFood',FoodController.CreateFood);
router.get('/ReadFood',FoodController.ReadFood);
router.get('/ReadById/:id',FoodController.ReadById);

module.exports=router;