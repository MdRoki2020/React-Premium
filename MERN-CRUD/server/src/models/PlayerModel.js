const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    videoName:{type:String},
    videos:{type:String},
    createdDate:{type:Date,default:Date.now()}
})
const PlayerModel=mongoose.model('videos',DataSchema)
module.exports=PlayerModel;