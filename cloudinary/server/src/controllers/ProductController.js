
const multer = require('multer');
const Product = require('../models/Product');
const cloudinary = require('cloudinary').v2;

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'dv4u2qxzk',
  api_key: '714763777119718',
  api_secret: 'Nba2z-s11igglE6HNwz08d6xlVM'
});

// Define multer storage and file filter
const storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
  // Only accept jpeg, jpg, and png
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};

// Set up multer upload
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

// Function to create a new product
exports.createProduct = async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Save product to MongoDB
    const product = new Product({
      title: req.body.title,
      content: req.body.content,
      imageUrl: result.secure_url,
      cloudinary_id: result.public_id
    });
    await product.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};















// const cloudinary = require('cloudinary').v2;
// const Product = require('../models/Product');
// const path = require('path');

// // Cloudinary configuration
// cloudinary.config({
//   cloud_name: 'dv4u2qxzk',
//   api_key: '714763777119718',
//   api_secret: 'Nba2z-s11igglE6HNwz08d6xlVM'
// });

// // Function to create a new product
// exports.createProduct = async (req, res) => {
//   try {
//     // Check if file is present in the request
//     if (!req.file) {
//       return res.status(400).json({ message: "No file attached" });
//     }

//     // Upload image to Cloudinary
//     const { path } = req.file;
//     const result = await cloudinary.uploader.upload(path);

//     // Save product to MongoDB
//     const product = new Product({
//       title: req.body.title,
//       content: req.body.content,
//       imageUrl: result.secure_url,
//       cloudinary_id: result.public_id
//     });
//     await product.save();
//     res.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };


exports.NewProduct=(req,res)=>{
    let reqBody=req.body;

    NewProductModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}
