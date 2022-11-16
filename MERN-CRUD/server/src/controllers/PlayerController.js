const PlayerModel = require("../models/PlayerModel");


//create Video
exports.CreateVideo=(req,res)=>{
    let reqBody=req.body;

    PlayerModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
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