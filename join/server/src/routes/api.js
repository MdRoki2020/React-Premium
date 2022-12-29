const express=require('express');
const PostController=require("../controllers/PostControllers")
const router=express.Router();

router.post('/CreatePost',PostController.CreatePost);
router.post('/CreateComment',PostController.CreateComment);
router.get('/postAndComment',PostController.postAndComment);
module.exports=router;