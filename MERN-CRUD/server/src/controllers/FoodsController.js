const FoodsModel = require('../models/FoodsModel');

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