const VideoModel=require('../models/PostModel')


exports.PostVideo= async (req, res) => {
  try {
    const { title, url } = req.body;
    const video = new VideoModel({ title, url });
    await video.save();
    res.status(201).json({status:"Video added to playlist",data:video})
  } catch (err) {
    console.error(err);
    res.status(500).json({status:"fail",data:err})
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


