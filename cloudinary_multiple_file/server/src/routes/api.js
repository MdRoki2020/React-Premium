const express = require('express');

const productController = require('../controllers/ProductController');
// const uploader = require("../helpers/multer");
const upload = require('../helpers/multer');
const router = express.Router();



router.post('/createMultipleProduct', upload, productController.createProduct);

module.exports = router;