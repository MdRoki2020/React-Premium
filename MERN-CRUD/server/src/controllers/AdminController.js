const AdminModel=require('../models/AdminModel');
const jwt=require("jsonwebtoken");

exports.AdminLogin=(req,res)=>{
    let reqBody=req.body;
    AdminModel.aggregate([
        {$match:reqBody},
        {$project:{_id:0,Email:1,image:1}}
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


//create Admin
exports.CreateAdmin=(req,res)=>{
    let reqBody=req.body;

    AdminModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}