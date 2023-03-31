const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  }
});

module.exports = mongoose.model('Metas', productSchema);