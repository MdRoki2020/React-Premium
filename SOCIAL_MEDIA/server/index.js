const express=require('express');
const app=express();
const cors=require("cors");

app.use(cors());
app.use(express.json());

const userRoute=require("./routes/User");
app.use("/user",userRoute)

app.listen(5000,(req,res)=>{
    console.log("server Running...");
})