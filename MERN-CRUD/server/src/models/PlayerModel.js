const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    videoName:{type:String},
    videoLink:{type:String},
    createdDate:{type:Date,default:Date.now()}
})
const PlayerModel=mongoose.model('video',DataSchema)
module.exports=PlayerModel;