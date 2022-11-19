//basic import
const express=require('express');
const router=require('./src/routes/api')
const app=new express();
const bodyParser=require('body-parser');
const path=require('path');
const multer=require('multer');
const fs=require('fs');
const path=require('path');

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        if(!fs.existsSync('public')){
            fs.mkdirSync("public");
        }

        if(!fs.existsSync('public/videos')){
            fs.mkdirSync('public/videos');
        }
        cb(null,"public/videos");
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + file.originalname)
    }
});

const upload = multer({
    storage:storage,
    fileFilter: function(req,file,cb){
        var ext= path.extname(file.originalname);

        if(ext !== ".mkv" && ext !== ".mp4"){
            return cb(new Error("Only Videos Are Allowed"));
        }
        cb(null,true);
    },
});


//security middleware
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');


//Database
const mongoose=require('mongoose');

//impliment security middleware
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());
app.use(helmet());

//passing json object object limit
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}));


//body parser implement..
app.use(bodyParser.json());

//request rate limit..
const limiter=rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter);


//Mongodb Connection
let URI="mongodb+srv://<username>:<password>@cluster0.l3mtknu.mongodb.net/CRUD?retryWrites=true&w=majority"
let OPTION={user:'rsroki2022',pass:'AaBbCc2580!!@@',autoIndex:true}

mongoose.connect(URI,OPTION,(err)=>{
    console.log("Connection Success");
    console.log(err)
})

//Routing Implimet...
app.use("/api/v1",router)

//undefined Route Impliment
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"});
})

module.exports=app;



