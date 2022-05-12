const express=require('express');
const mysql=require('mysql');
const cors=require("cors");


const app=express();
app.use(express.json());
app.use(cors());

const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));


let con=mysql.createConnection({host:"localhost",user:"root",password:"",database:"fullstack"});



// for data insert...
app.post("/insert",(req,res)=>{

    const userName=req.body.userName;
    const userPhone=req.body.userPhone;


    con.query("INSERT INTO `users`(`userName`, `userPhone`) VALUES (?,?)",[userName,userPhone]);
}).listen(3001);


const credential={
    email:"roki",
    password:"1234"
}


// for login
app.post("/login",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    console.log(email)
    console.log(password)

    if(email=='roki' && password=='1234'){
        console.log('login success...');
        return  res.redirect(308,"https://www.google.com/");
    }else{
        console.log('invlid..');
    }

    // con.query("SELECT * FROM `auth` WHERE `email`=? AND `password`=?",[email,password],
    // (err,result)=>{
    //     if(result==true){
    //         console.log('login success');
    //         // res.redirect('http://localhost:3000/dashboard');
    //     }else{
    //         console.log('something went wrong');
    //     }
    //     if(result.length>0){
    //         res.send(result);
    //     }else{
    //         res.send({message: "wrong Email or password"});
    //     }
    // })
}).listen(3002);