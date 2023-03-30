const path = require('path');
const FoodsModel = require('../models/FoodsModel');
const Product = require('../models/Product');
const cloudinary=require('../utility/cloudinary');
const fs=require('fs');

//create food
exports.CreateFood=(req,res)=>{
    let reqBody=req.body;

    FoodsModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}





//read food
exports.ReadFood=(req,res)=>{

    FoodsModel.find((err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })

}


//Read By Id
exports.ReadById=(req,res)=>{

    let id=req.params.id;
    let Query={_id:id}

    FoodsModel.find(Query,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })

}


//update food
exports.UpdateFood=(req,res)=>{

    let id=req.params.id;
    let Query={_id:id};
    let reqBody=req.body;

    FoodsModel.updateOne(Query,reqBody,(err,data)=>{

        if(err){
            res.status(400).json({'status':"fail",data:err})
        }else{
            res.status(200).json({"status":"successful",data:data})
        }
    })

}


//delete food
exports.DeleteFood=(req,res)=>{

    let id=req.params.id;
    let Query={_id:id};

    FoodsModel.remove(Query,(err,data)=>{

        if(err){
            res.status(400).json({"status":"fail",data:err})
        }else{
            res.status(200).json({"status":"successfull",data:data})
        }
    })
    
}

//food count
exports.foodCount=(req,res)=>{
    FoodsModel.aggregate([
        {$count:'total'}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//match by foodsType
exports.matchingByFoodType=(req,res)=>{
    let foodsType=req.params.foodsType;

    FoodsModel.aggregate([
        {$match:{foodsType:foodsType}},
        {$project:{
            _id:1,foodsName:1,foodsDescription:1,foodsType:1,foodsPrice:1,foodsStockQty:1,

        }}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//Match By Food Type..
// exports.matchingByFoodType=(req,res)=>{

//     let foodsType=req.params.foodsType;
//     let Query={foodsType:foodsType}

//     FoodsModel.find(Query,(err,data)=>{

//         if(err){
//             res.status(400).json({status:"fail",data:err})
//         }else{
//             res.status(200).json({status:"success",data:data})
//         }
//     })

// }



//cloudinary
// exports.createProduct=async (req,res,next)=>{
//     const { title, content,imageurl } = req.body;

//     try{
//         const result=await cloudinary.uploader.upload(imageurl,{
//             folder:"product",
//             // width:300,
//             // crop:"scale"
//         });
//         const product=await Product.create({
//             title,
//             content,
//             imageurl:{
//                 public_id:result.public_id,
//                 url:result.secure_url
//             }
//         })
//         res.status(201).json({
//             success:true,
//             product
//         })
        
//     }catch(err){
//         console.log(err)
//         next(err)
//     }
// }


// exports.CreateProduct = async (req, res) => {
//     try {
//       console.log(req.body);
//       let file = req.files[0];
//       cloudinary.uploader.upload(file.path, (err, result) => {
//         console.log(result);
//       });
//       const product = new Product({
//         title: req.body.title,
//         content: req.body.content,
//         imageUrl: req.body.imagePath
//       });
//       await product.save();
//       res.json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Server error" });
//     }
//   };

exports.CreateProduct = async (req, res) => {
    try {
      const { path } = req.file;
      const result = await cloudinary.uploader.upload(path);
  
      const product = new Product({
        title: req.body.title,
        content: req.body.content,
        image: result.secure_url,
        cloudinary_id: result.public_id,
      });
      await product.save();
      fs.unlinkSync(path)
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };
  