const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    filePath:{type:String},
    PublisherEmail:{type:String},
    ProductName:{type:String},
    ProductBrand:{type:String},
    ProductPrice:{type:String},
    ProductExPrice:{type:String},
    ProductColor:{type:String},
    ProductBattery:{type:String},
    ProductWarranty:{type:String},
    ProductCategories:{type:String},
    ProductFetures:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
})

const PostAdsModel=mongoose.model('ADs',DataSchema);
module.exports=PostAdsModel;