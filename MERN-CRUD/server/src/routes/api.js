const express=require('express');
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const FoodController=require("../controllers/FoodsController");
const UserController=require('../controllers/UserController');
const AdminController=require('../controllers/AdminController');
const ProductsController=require("../controllers/ProductController");
const PlayerController=require("../controllers/PlayerController");
const router=express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (!fs.existsSync("public")) {
        fs.mkdirSync("public");
      }
  
      if (!fs.existsSync("public/videos")) {
        fs.mkdirSync("public/videos");
      }
  
      cb(null, "public/videos");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      var ext = path.extname(file.originalname);
  
      if (ext !== ".mkv" && ext !== ".mp4") {
        return cb(new Error("Only videos are allowed!"));
      }
  
      cb(null, true);
    },
  });

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
router.post("/CreateVideo", upload.fields([
    {
    name:"videos",
    maxCount:5,
    },
]), PlayerController.create);
router.get("/ReadVideo/",PlayerController.ReadVideo);


module.exports=router;