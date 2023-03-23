const UserModel = require('../models/UserModel');
const OtpModel= require('../models/OtpModel');
const jwt=require('jsonwebtoken');
const SendEmailUtility = require('../utility/SendEmailUtility');

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

//for login
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


//recover verify email
exports.RecoverVerifyEmail=async (req,res)=>{
    let Email = req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000)
    try {
        // Email Account Query
        let UserCount = (await UserModel.aggregate([{$match: {Email:Email}}, {$count: "total"}]))
        if(UserCount.length>0){
            // OTP Insert
            let CreateOTP = await OtpModel.create({Email:Email, otp:OTPCode})
            // Email Send
            let SendEmail = await SendEmailUtility(Email,"Your PIN Code is= "+OTPCode,"Reach World PIN Verification")
            res.status(200).json({status: "success", data: SendEmail})
        }
        else{
            res.status(200).json({status: "fail", data: "No User Found"})
        }

    }catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}


exports.RecoverVerifyOTP=async(req,res)=>{
    let Email=req.params.email;
    let OTPCode=req.params.otp;
    let status=0;
    let statusUpdate=1;

    try{

    let OTPCount=(await OtpModel.aggregate([{$match:{Email:Email,otp:OTPCode,status:status}},{$count:"total"}]))
    if(OTPCount.length>0){
        let OTPUpdate = await OtpModel.updateOne({Email:Email, otp:OTPCode, status:status}, {
            Email:Email,
            otp:OTPCode,
            status:statusUpdate
        })
        res.status(200).json({status:"success", data:OTPUpdate})

    }else{
        res.status(200).json({status:"fail",data:"invalid OTP Code"})
    }
}catch(e){
    res.status(200).json({status:"fail", data:e})
}

}


exports.RecoverResetPass=async (req,res)=>{

    let Email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass =  req.body['password'];
    let statusUpdate=1;

    try {
        let OTPUsedCount = await OtpModel.aggregate([{$match: {Email: Email, otp: OTPCode, status: statusUpdate}}, {$count: "total"}])
        if (OTPUsedCount.length>0) {
            let PassUpdate = await UserModel.updateOne({Email: Email}, {
                password: NewPass
            })
            res.status(200).json({status: "success", data: PassUpdate})
        } else {
            res.status(200).json({status: "fail", data: "Invalid Request"})
        }
    }
    catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}



