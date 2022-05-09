const express=require('express');
const mysql=require('mysql');
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

let con=mysql.createConnection({host:"localhost",user:"root",password:"",database:"fullstack"});



// for data insert...
app.post("/insert",(req,res)=>{

    const userName=req.body.userName;
    const userPhone=req.body.userPhone;

    con.query("INSERT INTO `users`(`userName`, `userPhone`) VALUES (?,?)",[userName,userPhone]);
}).listen(3001);