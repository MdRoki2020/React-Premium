const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
  title:{type:String},
  url:{type:String},
  CreatedDate:{type:Date,default:Date.now()}
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;