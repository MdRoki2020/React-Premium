const UserModel = require('../models/UserModel');
var jwt=require('jsonwebtoken');

//create user
exports.CreateUser=(req,res)=>{
    let reqBody=req.body;

    UserModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}


exports.Login=(req,res)=>{
    let reqBody=req.body;
    UserModel.aggregate([
        {$match:reqBody},
        {$project:{_id:0,FullName:1,Email:1,image:1}}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            if(data.length>0){
                let payload={exp:Math.floor(Date.now()/1000)+(24*60*60),data:data[0]['Email']}
                let token=jwt.sign(payload,'Secretkey123456789');
                res.status(200).json({status:"success",token:token,data:data[0]})
            }else{
                res.status(401).json({status:"unauthorized"})
            }
        }
    })
}
