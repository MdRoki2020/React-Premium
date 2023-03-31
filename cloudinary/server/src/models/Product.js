const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true
  },
  content: {
    type: String,
    // required: true
  },
  imageUrl: {
    type: String,
    // required: true
  },
  cloudinary_id: {
    type: String,
    // required: true
  }
});

module.exports = mongoose.model('Metas', productSchema);