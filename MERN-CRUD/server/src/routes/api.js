const express=require('express');


const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const FoodController=require("../controllers/FoodsController");
const UserController=require('../controllers/UserController');
const AdminController=require('../controllers/AdminController');
const ProductsController=require("../controllers/ProductController");
const PlayerController=require("../controllers/PlayerController");
const { upload } = require('../utility/filehelper');
const router=express.Router();

//Food management
router.post('/CreateFood',AuthVerifyMiddleware,FoodController.CreateFood);
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


//for recovery password
router.get("/RecoverVerifyEmail/:email",UserController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UserController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UserController.RecoverResetPass);

//product shown
router.get("/ProductList/:pageNo/:perPage/:searchKeyword?",ProductsController.ProductList);


//Video Controller
router.post("/CreateVideo/",upload.single('file'),PlayerController.CreateVideo);
router.get("/ReadVideo/",PlayerController.ReadVideo);


module.exports=router;