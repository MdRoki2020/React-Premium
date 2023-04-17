const express=require('express');
const UserController=require('../controllers/UserController');
const upload = require('../helpers/multer');
const router=express.Router();


router.post('/postVideo', upload.single('file'), UserController.postVideo);
router.get('/GetVideo',UserController.GetVideo);


module.exports=router;