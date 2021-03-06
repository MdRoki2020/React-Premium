const express=require('express');
const app=express();
const cors=require('cors');

app.use(express.json());
app.use(cors());

const db=require('./models');

//router
const fetchRouter=require('./routes/info');
app.use("/posts",fetchRouter);


db.sequelize.sync().then(()=>{

    app.listen(3001,()=>{
        console.log("server running successfully on port 3001 !");
    })
    
})