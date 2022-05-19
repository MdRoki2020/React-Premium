import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Dashboard() {

  //for fetching data...
  const [fetchdata,setFetchdata]=useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3002/fetch').then((res)=>{
      setFetchdata(res.data);
    })
  })



  //for delete data...
  const deleteData=(id)=>{
    Axios.delete(`http://localhost:3003/delete/${id}`);
  }



  //for update data...
  const updateData=(id)=>{
    console.log(id);
  }

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
              <th>USER NAME</th>
              <th>USER PHONE</th>
              <th>REG TIME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>

          {
              fetchdata.map((value)=>
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.userName}</td>
                <td>{value.userPhone}</td>
                <td>{value.time}</td>
                <td><Link to={"/contactUpdate/"+value.id}><button onClick={()=>{updateData(value.id)}} className='btn btn-info'>Edit</button></Link> <button onClick={()=>{deleteData(value.id)}} className='btn btn-danger'>Delete</button></td>
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
