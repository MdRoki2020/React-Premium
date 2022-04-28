const express=require('express');
const mysql=require('mysql');
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

let con=mysql.createConnection({host:"localhost",user:"root",password:"",database:"react"});



app.post("/register",(req,res)=>{

    const username=req.body.username;
    const userpassword=req.body.userpassword;

    con.query("INSERT INTO `employee`(`userName`, `userPassword`) VALUES (?,?)",[username,userpassword]);
}).listen(3000)

// app.listen(3000,()=>{
//     console.log('server running at port 3000');
// });