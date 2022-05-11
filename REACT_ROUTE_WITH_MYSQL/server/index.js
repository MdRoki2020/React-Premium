const express=require('express');
const mysql=require('mysql');
const cors=require("cors");


const app=express();
app.use(express.json());
app.use(cors());

const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));


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


    if(email=='roki' || password=='1234'){
         res.redirect("http://localhost:3000/dashboard");
    }else{
        res.end('not okey');
    }

    // con.query("SELECT * FROM `auth` WHERE `email`=? AND `password`=?",[email,password],
    // (err,result)=>{
    //     if(result==true){
    //         res.send({err:err});
    //         res.redirect('/dashboard');
    //     }
    //     if(result.length>0){
    //         res.send(result);
    //     }else{
    //         res.send({message: "wrong Email or password"});
    //     }
    // })
}).listen(3002);