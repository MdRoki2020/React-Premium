//basic import
const express=require('express');
const router=require('./src/routes/api')
const app=new express();
const bodyParser=require('body-parser');
const path=require('path');


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

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));


//body parser implement..
app.use(bodyParser.json());
// app.use('/uploads',express.static('uploads'))

//request rate limit..
const limiter=rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter);

app.use('/uploads',express.static(path.join(__dirname,'uploads')));



//Mongodb Connection
let URI="mongodb+srv://rsroki2022:AaBbCc2580!!@@@cluster0.l3mtknu.mongodb.net/?retryWrites=true&w=majority"
let OPTION={user:'rsroki2022',pass:'AaBbCc2580!!@@',autoIndex:true}

mongoose.connect(URI,OPTION,(err)=>{
    console.log("Connection Success");
    console.log(err)
})

//Routing Implimet...
app.use("/api/v1",router);

//undefined Route Impliment
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"});
})

module.exports=app;



