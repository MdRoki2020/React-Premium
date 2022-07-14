const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const port=process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

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




//listen on environment port or 5000
app.listen(port,()=>{
    console.log(`listen on port ${port}`);
})