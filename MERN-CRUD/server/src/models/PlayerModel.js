const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    fileName:{type:String},
    filePath:{type:String},
    fileType:{type:String},
    fileSize:{type:String},
    createdDate:{type:Date,default:Date.now()}
})

const PlayerModel=mongoose.model('fileDetails',DataSchema)
module.exports=PlayerModel;