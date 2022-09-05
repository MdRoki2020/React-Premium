const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    foodsName:{type:String},
    foodsDescription:{type:String},
    foodsType:{type:String},
    foodsPrice:{type:String},
    foodsStockQty:{type:String},
    foodImage:{type:String},
    createdDate:{type:Date,default:Date.now()}
})

const FoodsModel=mongoose.model('foods',DataSchema)
module.exports=FoodsModel;