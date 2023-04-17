const VideoModel = require('../models/PostModel');
const cloudinary = require('../helpers/cloudinary');

exports.postVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file attached" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "video",
      folder: "video"
    });

    // Save video to MongoDB
    const video = new VideoModel({
      title: req.body.title,
      videoUrl: result.secure_url,
      cloudinary_id: result.public_id
    });

    await video.save();

    res.status(200).json({ status: "success", data: video });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.GetVideo= async (req, res) => {
  try {
    const videos = await VideoModel.find();
    res.status(200).json({ data: videos });
  } catch (err) {
    console.error(err);
    res.status(500).json({status:"fail",data:err})
  }
};


