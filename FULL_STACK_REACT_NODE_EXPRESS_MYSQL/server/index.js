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



// for data fetch...
app.get("/fetch",(req,res)=>{

    con.query("SELECT * FROM `users`",(err,data)=>{
        res.send(data);
    });
}).listen(3002);


// for data delete...
app.delete("/delete/:id",(req,res)=>{

    const id=req.params.id;

    const deleteQuery='DELETE FROM `users` WHERE `id`=?';
    con.query(deleteQuery,id,(err,data)=>{
        console.log(err);
    })
}).listen(3003);
