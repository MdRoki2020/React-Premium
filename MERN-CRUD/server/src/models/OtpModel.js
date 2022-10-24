const mongoose=require('mongoose');
const OTPSchema=mongoose.Schema({
    Email:{type:String},
    otp:{type:String},
    status:{type:Number,default:0},
    createdDate:{type:Date,default:Date.now()}
});
const OTPModel=mongoose.model('otps',OTPSchema);
module.exports=OTPModel;