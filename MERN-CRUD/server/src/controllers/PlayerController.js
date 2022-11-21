const PlayerModel = require("../models/PlayerModel");



exports.create = async (req, res) => {
    const { name } = req.body;
    let videosPaths = [];
  
    if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
      for (let video of req.files.videos) {
        videosPaths.push("/" + video.path);
      }
    }
  
    try {
      const createdMedia = await PlayerModel.create({
        name,
        videos: videosPaths,
      });
  
      res.json({ message: "Media created successfully", createdMedia });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };



//Read Video
exports.ReadVideo=(req,res)=>{

    PlayerModel.find((err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })

}