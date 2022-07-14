import React, { useEffect, useState, } from 'react';
import {Table} from 'react-bootstrap';
import {Link,useNavigate} from "react-router-dom";
import Axios from 'axios';

function Home() {
    const [fetchdata,setfetchdata]=useState([]);
    let navigate = useNavigate ();

    useEffect(()=>{
        Axios.get('http://localhost:5000/').then((res)=>{
            setfetchdata(res.data);
        })
      },[]);


//for delete data...
const deleteData=(id)=>{
  alert("Are You Sure ?")
  Axios.delete(`http://localhost:5000/${id}`)
  navigate("/");
};


  return (
    <div>
      <h2 className='text-center'>Dashboard</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
        <h4>SHOW USER</h4>
        <hr/>
        <Table className='striped bordered hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>TAGLINE</th>
              <th>DESCRIPTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>

          {
              fetchdata.map((value)=>
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.tagline}</td>
                <td>{value.description}</td>
                <td><Link to={"/edit/"+value.id}><button className='btn btn-info'>Edit</button></Link> &nbsp; <button className='btn btn-danger' onClick={()=>{deleteData(value.id)}}> Delete </button></td>
              </tr>
              )
            }

          </tbody>
        </Table>
        </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
