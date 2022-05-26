const express=require('express');
const router=express.Router();

const db=require("../config/db");

router.get("/register",(req,res)=>{
    db.query("INSERT INTO `user`(`username`, `password`) VALUES ('roki','1234')",(err,results)=>{
        console.log(err);
        res.send(results);
    })
});

module.exports=router;