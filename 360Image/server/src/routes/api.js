const express=require('express');
const UserController=require('../controllers/UserController');
const upload = require('../helpers/multer');
const router=express.Router();


router.post('/upload', upload.single('image'), UserController.uploadImage);
router.get('/GetImage/:id', UserController.getRoom);



module.exports=router;