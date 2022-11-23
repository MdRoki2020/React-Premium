const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        maxlength:2000,
    },
    videos:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }

    },
    createdDate:{type:Date,default:Date.now()}
})
const PlayerModel=mongoose.model('videos',DataSchema)
module.exports=PlayerModel;