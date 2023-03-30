const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String }
});

const Product = mongoose.model("products", postSchema);

module.exports = Product;