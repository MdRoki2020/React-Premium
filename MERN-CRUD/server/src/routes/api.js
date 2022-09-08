const express=require('express');

const FoodController=require("../controllers/FoodsController");
const router=express.Router();

//Food management
router.post('/CreateFood',FoodController.CreateFood);
router.get('/ReadFood',FoodController.ReadFood);
router.get('/ReadById/:id',FoodController.ReadById);
router.post('/UpdateFood/:id',FoodController.UpdateFood);

module.exports=router;