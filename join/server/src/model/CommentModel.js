const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    PostId:{type:mongoose.Schema.Types.ObjectId},
    Comment:{type:String},
    createdDate:{type:Date,default:Date.now()}
})

const CommentModel=mongoose.model('comments',DataSchema)
module.exports=CommentModel;