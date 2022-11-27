const PlayerModel = require("../models/PlayerModel");

// exports.CreateVideo = async (req, res, next) => {
//   try{
//       const file=new PlayerModel({
//         fileName:req.file.originalname,
//         filePath:req.file.path,
//         fileType:req.file.mimetype,
//         fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
//         videoname:req.body.name
//       });
//       await file.save();
//       console.log(file);
//       res.status(201).send('File Uploaded Successfully');
//   }catch(error) {
//       res.status(400).send(error.message);
//   }
// }

  exports.CreateVideo=(req,res)=>{

    const file=new PlayerModel({
        fileName:req.file.originalname,
        filePath:req.file.path,
        fileType:req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
        videoname:req.body.name
      });

      PlayerModel.create(file,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}


const fileSizeFormatter = (bytes, decimal) => {
  if(bytes === 0){
      return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}



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