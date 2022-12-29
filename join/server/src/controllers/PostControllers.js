const CommentModel = require('../model/CommentModel');
const PostModel = require('../model/PostModel');

//create post
exports.CreatePost=(req,res)=>{
    let reqBody=req.body;

    PostModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}


//create comment
exports.CreateComment=(req,res)=>{
    let reqBody=req.body;

    CommentModel.create(reqBody,(err,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}

//join post to comment......
// exports.postAndComment=(req,res)=>{

//     FoodsModel.find((err,data)=>{

//         if(err){
//             res.status(400).json({status:"fail",data:err})
//         }else{
//             res.status(200).json({status:"success",data:data})
//         }
//     })

// }

// db.posts.aggregate([
//     {$lookup:{from:"comments",localField:"_id",foreignField:"PostId",as:"postAndComment"}}
//     ])

exports.postAndComment=async (req, res) => {
    // let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    // let SearchArray=[{Note: SearchRgx},{'Type.Name': SearchRgx}]
    let JoinStage= {$lookup: {from: "comments", localField: "_id", foreignField: "PostId", as: "postAndComment"}}
    // let Result=await ListOneJoinService(req,DataModel,SearchArray,JoinStage);
    res.status(200).json(JoinStage)
}