const express=require('express');

const FoodController=require("../controllers/FoodsController");
const router=express.Router();

//Create
router.post('/CreateFood',FoodController.CreateFood);

module.exports=router;