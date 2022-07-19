const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const multer=require("multer");
const path=require('path');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage })




const port=process.env.PORT || 5000;






//mysql
const pool=mysql.createPool({
    connectionLimit :10,
    host            :"localhost",
    user            :"root",
    password        :"",
    database        :"react_crud"
});



//fetching data
app.get('/',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query("select * from beers",(err,rows)=>{
            connection.release() //return the connection to pool

            if(!err){
                res.send(rows);
            }else{
                console.log(err);
            }
        })
    })
})

//fetch data by id
app.get('/:id', async (req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query ("select * from beers where id=?",[req.params.id],(err,rows)=>{
            connection.release() //return the connection to pool

            if(!err){
                res.send(rows);
            }else{
                console.log(err);
            }
        })
    })
})


//update data
app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { id, name, tagline, description } = req.body ;

        connection.query('UPDATE beers SET name = ?, tagline = ?, description = ? WHERE id = ?', [name, tagline, description, id] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Beer with the name: ${name} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})

//delete data...
app.delete('/:id',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query("delete from beers where id=?",[req.params.id],(err,rows)=>{
            connection.release() //return the connection to pool

            if(!err){
                res.send(`the record id: ${[req.params.id]} has been removed.`);
            }else{
                console.log(err);
            }
        })
    })
})



//register..
app.post('/register', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        
        const email=req.body.email;
        const password=req.body.password;
        connection.query( "INSERT INTO auth (email,password) VALUES (?,?)",[email,password],(err, result) => {
        connection.release() // return the connection to pool
        if (err) {
            res.send({err:err});
        }
        if(result){
            res.send({successmessage:"Your Registration Was Done"});
        }else{

            res.send({errormessage:"something went wrong"});
        }

        })
    })
});

//login..
app.post('/login', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        
        const email=req.body.email;
        const password=req.body.password;
        connection.query( "SELECT * FROM auth WHERE email=? AND password=?",
        [email,password],
        (err, result) => {
        connection.release() // return the connection to pool
        if (err) {
            res.send({err:err});
        }
        if(result.length>0){
            res.send(result);
        }else{

            res.send({message:"Email or Password Incorrect !"});
        }

        })
    })
});






//insert
app.post('',upload.single('image'), (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        
        const params = req.body
        connection.query('INSERT INTO beers SET ?', params, (err, result) => {
        connection.release()
        if (err) {
            res.send({err:err});
        }
        if(result){
            res.send({successmessage:"Student Added Successfull"});
        }else{

            res.send({errormessage:"something went wrong"});
        }

        })
    })
});









// app.post('',upload.single('image'), (req, res) => {

//     pool.getConnection((err, connection) => {
//         if(err) throw err
        
//         const params = req.body
//         connection.query('INSERT INTO beers SET ?', params, (err, result) => {
//         connection.release()
//         if (err) {
//             res.send({err:err});
//         }
//         if(result){
//             res.send({successmessage:"Student Added Successfull"});
//         }else{

//             res.send({errormessage:"something went wrong"});
//         }

//         })
//     })
// });



//listen on environment port or 5000
app.listen(port,()=>{
    console.log(`listen on port ${port}`);
})