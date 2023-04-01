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
    const product = await Product.create({
      title,
      content,
      images
    });

    res.status(201).json({
      status: 'success',
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  }
};












// exports.createProduct = async (req, res) => {
//   try {
//     if (!req.files) {
//       return res.status(400).json({ message: "No files attached" });
//     }

//     const imageUploadPromises = req.files.map((file) =>
//       cloudinary.uploader.upload(file.path)
//     );

//     const uploadedImages = await Promise.all(imageUploadPromises);

//     const product = new Product({
//       title: req.body.title,
//       content: req.body.content,
//       images: uploadedImages.map((image) => ({
//         url: image.secure_url,
//         cloudinary_id: image.public_id
//       }))
//     });

//     product.save((err, data) => {
//       if (err) {
//         res.status(400).json({ status: "fail", data: err });
//       } else {
//         res.status(200).json({ status: "success", data: data });
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// };