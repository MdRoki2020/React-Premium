const express=require('express');
const router=express.Router();

const db=require("../config/db");

router.post("/register",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    db.query("INSERT INTO `user`(`username`, `password`) VALUES (?,?)",[username,password],(err,results)=>{
        console.log(err);
        res.send(results);
    })
});

router.post("/login",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    db.query("SELECT * FROM `user` WHERE `username`=?",username,(err,results)=>{
        if(err){
            console.log(err)
        }
        if(results.length>0){
            if(password==results[0].password){
                res.send("you are logged in!");
            }else{
                res.send("wrong username or password !")
            }
        }else{
            res.send("user dosent exist !");
        }
    })
});

module.exports=router;