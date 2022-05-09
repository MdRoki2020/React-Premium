const express=require('express');
const mysql=require('mysql');
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

//for login system..
const bcrypt=require('bcrypt');
const saltRounds=10;

let con=mysql.createConnection({host:"localhost",user:"root",password:"",database:"fullstack"});



// for data insert...
app.post("/insert",(req,res)=>{

    const userName=req.body.userName;
    const userPhone=req.body.userPhone;

    con.query("INSERT INTO `users`(`userName`, `userPhone`) VALUES (?,?)",[userName,userPhone]);
}).listen(3001);


// for login
app.post("/login",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    con.query("SELECT * FROM `auth` WHERE `email`=? AND `password`=?",[email,password],
    (err,result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length>0){
            res.send(result);
        }else{
            res.send({message: "wrong Email or password"});
        }
    })
}).listen(3002);