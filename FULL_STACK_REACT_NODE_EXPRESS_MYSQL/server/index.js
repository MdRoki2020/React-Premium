const express=require('express');
const app=express();
const mysql=require('mysql');
const bodyParser=require('body-parser');
const cors=require('cors');


app.use(express.json());
app.use(cors());

let con=mysql.createConnection({host:"localhost",user:"root",password:"",database:"fullstack"});

// app.use(bodyParser.urlencoded({extended:true}));

app.post('/api/insert',(req,res)=>{
    let userName=req.body.userName;
    let userPhone=req.body.userPhone;
    con.query("INSERT INTO `users`(`userName`,`userPhone`) VALUES (?,?)",[userName,userPhone]);
})

app.listen(3001,()=>{
    console.log('server is running at port 3001');
})