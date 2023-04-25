const PostModel = require('../models/PostModel');
const cloudinary = require('../helpers/cloudinary');

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No file uploaded');
    }
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      resource_type: 'image',
      transformation: [
        { width: 1200, crop: "scale" },
        { angle: "360", format: "mp4" }
      ]
    });
    const newPost = new PostModel({
      title: req.body.title,
      description: req.body.description,
      image: result.secure_url,
      // other post data...
    });

    const createdPost = await newPost.save();
    res.status(200).json({ status: "success", data: createdPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};






exports.getRoom = async (req, res) => {
  try {
    const roomId = req.params.id;
    const data = await PostModel.findById(roomId);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting room data' });
  }
};

