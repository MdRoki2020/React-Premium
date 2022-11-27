const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    fileName:{type:String},
    filePath:{type:String},
    fileType:{type:String},
    fileSize:{type:String},
    videoname:{type:String},
    createdDate:{type:Date,default:Date.now()}
})

const PlayerModel=mongoose.model('videos',DataSchema)
module.exports=PlayerModel;