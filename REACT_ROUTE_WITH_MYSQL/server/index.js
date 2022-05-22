const express=require('express');
const mysql=require('mysql');
const cors=require("cors");


const app=express();
app.use(express.json());
app.use(cors());

const bodyparser=require('body-parser');
// const encoder=bodyparser.urlencoded();
// app.use(bodyparser.urlencoded({extended:true}));


let con=mysql.createConnection({host:"localhost",user:"root",password:"",database:"fullstack"});





// for data insert...
app.post("/insert",(req,res)=>{

    const userName=req.body.userName;
    const userPhone=req.body.userPhone;


    con.query("INSERT INTO `users`(`userName`, `userPhone`) VALUES (?,?)",[userName,userPhone]);
}).listen(3001);






//for data fetch...
app.get('/fetch',(req,res)=>{
    con.query("SELECT * FROM `users`",(err,data)=>{
        res.send(data);
    })
}).listen(3002)





//for data delete...
app.delete('/delete/:id',(req,res)=>{

    const id=req.params.id;
    con.query("DELETE FROM `users` WHERE `id`=?",[id]);
}).listen(3003);





//for data update...
app.put('/update',(req,res)=>{
    const id=req.params.id;

    con.query("UPDATE `users` SET `userName`=?,`userPhone`=? WHERE `id`=?",[userName,userPhone,id])
    res.redirect('http://localhost:3000/dashboard');
}).listen(3004);







// for login
app.post("/login",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    
    console.log(email)
    console.log(password)

    con.query("SELECT * FROM `auth` WHERE `email`=? AND `password`=?",[email,password],(err,results,fields)=>{
        if(results){
            // window.location.href="/dashboard";
            res.redirect("https://www.google.com/");
            console.log("its okey");
        }else{
            console.log("something went wrong");
        }
        res.end();
    })







    //  if(email=='roki' && password=='1234'){
    //     console.log('login success...');
    //      res.sendFile(__dirname + "/clint/src/Components/Dashboard.js")
    //      console.log('login success...');
    //     res.redirect("http://localhost:3000/dashboard");
    //  }else{
    //      console.log('invlid..');
    //  }

    // con.query("SELECT * FROM `auth` WHERE `email`=? AND `password`=?",[email,password],
    // (err,result)=>{
    //     if(result==true){
    //         console.log('login success');
            
    //     }else{
    //         console.log('something went wrong');
    //         res.redirect('http://localhost:3000/dashboard');
    //     }
    //     if(result.length>0){
    //         res.send(result);
    //     }else{
    //         res.send({message: "wrong Email or password"});
    //     }
    // })
}).listen(3005);