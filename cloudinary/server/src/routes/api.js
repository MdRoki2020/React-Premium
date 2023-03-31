const express = require('express');
const multer = require("multer");
const productController = require('../controllers/productController');

const router = express.Router();
const upload = multer();

router.post('/products', upload.single('file'), productController.createProduct);
router.post('/NewProduct',productController.NewProduct);

module.exports = router;