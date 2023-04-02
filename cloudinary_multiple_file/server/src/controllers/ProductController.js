const Product = require('../models/Product');
const path = require('path');
const cloudinary=require('../helpers/cloudinary');


exports.createProduct = async (req, res) => {
  const { title, content } = req.body;

  // check if any file is uploaded
  if (!req.files || !req.files.length) {
    return res.status(400).json({
      status: 'error',
      message: 'Please upload at least one image'
    });
  }

  try {
    const images = [];

    // upload each file to cloudinary and save the response in the images array
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path);

      images.push({
        imageUrl: result.secure_url,
        cloudinary_id: result.public_id
      });
    }

    // create a new product with the given title, content, and images
    const product = await Product.create({title,content,images});

    res.status(201).json({status: 'success',data: product});

  } catch (error) {
    console.error(error);
    res.status(400).json({status: 'error',message: 'Something went wrong'});
  }
};