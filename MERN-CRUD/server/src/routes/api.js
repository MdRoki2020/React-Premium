const express=require('express');
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const FoodController=require("../controllers/FoodsController");
const UserController=require('../controllers/UserController');
const AdminController=require('../controllers/AdminController');
const router=express.Router();

//Food management
router.post('/CreateFood',FoodController.CreateFood);
router.get('/ReadFood',FoodController.ReadFood);
router.get('/ReadById/:id',FoodController.ReadById);
router.post('/UpdateFood/:id',FoodController.UpdateFood);
router.get('/DeleteFood/:id',FoodController.DeleteFood);


//User Management

router.post('/CreateUser',UserController.CreateUser);
router.post('/Login',UserController.Login);

//Admin Management
router.post('/AdminLogin',AdminController.AdminLogin);
router.post('/CreateAdmin',AdminController.CreateAdmin);

module.exports=router;