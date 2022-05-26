const express=require('express');
const app=express();

const userRoute=require("./routes/User");
app.use("/user",userRoute)

app.listen(3001,(req,res)=>{
    console.log("server Running...");
})