const PostAdsModel = require('../model/PostModel');

exports.categoryGraph = async (req, res) => {
  try {
    const result = await PostAdsModel.aggregate([
      {
        $group: {
          _id: '$ProductCategories',
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
