const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  // other room fields...
});

module.exports = mongoose.model('360Imgs', roomSchema);