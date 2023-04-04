const PostAdsModel=require('../models/PostModel')


exports.searchProducts = async (req, res) => {
  try {
    let search = req.query.search;
    let categories = req.query.categories;
    let filter = {};
    let projection = {};

    // Build the filter and projection objects based on the selected checkboxes
    if (req.query.productName) {
      filter["ProductName"] = { $regex: ".*" + search + ".*", "$options": "i" };
      projection["ProductName"] = 1;
    }

    if (req.query.productBrand) {
      filter["ProductBrand"] = { $regex: ".*" + search + ".*", "$options": "i" };
      projection["ProductBrand"] = 1;
    }

    if (req.query.productPrice) {
      filter["ProductPrice"] = { $regex: ".*" + search + ".*", "$options": "i" };
      projection["ProductPrice"] = 1;
    }

    if (req.query.productColor) {
      filter["ProductColor"] = { $regex: ".*" + search + ".*", "$options": "i" };
      projection["ProductColor"] = 1;
    }

    if (req.query.productCategories) {
      filter["ProductCategories"] = { $regex: ".*" + search + ".*", "$options": "i" };
      projection["ProductCategories"] = 1;
    }

    // If no categories are selected, return all products that match the search term
    if (!categories) {
      let data = await PostAdsModel.find(filter, projection);
      res.status(200).json({ status: "success", data: data });
    } else {
      let categoryList = categories.split(",");
      filter["ProductCategories"] = { $in: categoryList };
      let data = await PostAdsModel.find(filter, projection);
      res.status(200).json({ status: "success", data: data });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};
