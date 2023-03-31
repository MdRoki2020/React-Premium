const express = require('express');

const productController = require('../controllers/productController');
const uploader = require("../helpers/multer");
const router = express.Router();



router.post('/products', uploader.single('file'), productController.createProduct); 

module.exports = router;