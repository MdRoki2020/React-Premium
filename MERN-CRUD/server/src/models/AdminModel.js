const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    Email:{type:String,unique:true},
    password:{type:String},
    image:{type:String},
    createdDate:{type:Date,default:Date.now()}
})

const AdminModel=mongoose.model('admin',DataSchema);
module.exports=AdminModel;