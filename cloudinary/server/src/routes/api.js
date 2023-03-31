const express = require('express');
// const multer = require("multer");
const productController = require('../controllers/productController');
const uploader = require("../helpers/multer");

// const upload=multer();

const router = express.Router();



router.post('/products', uploader.single('file'), productController.createProduct); 
// router.post('/NewProduct',productController.NewProduct);

module.exports = router;