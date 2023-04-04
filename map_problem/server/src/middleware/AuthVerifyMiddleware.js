var jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    let Token=req.headers['token'];
    jwt.verify(Token,"Secretkey123456789",function(err,decoded){
        if(err){
            // console.log(Token)
            res.status(401).json({status:"unauthorized"})
        }else{
            let Email=decoded['data'];
            req.headers.Email=Email;
            next();
        }
    })
}