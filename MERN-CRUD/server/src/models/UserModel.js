const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    FullName:{type:String},
    Email:{type:String,unique:true},
    password:{type:String},
    image:{type:String},
    createdDate:{type:Date,default:Date.now()}
})

const UserModel=mongoose.model('users',DataSchema);
module.exports=UserModel;