const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    PostTitle:{type:String},
    PostDescription:{type:String},
    createdDate:{type:Date,default:Date.now()}
})

const PostModel=mongoose.model('posts',DataSchema)
module.exports=PostModel;