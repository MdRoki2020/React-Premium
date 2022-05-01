import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Table } from 'react-bootstrap';
import Axios from 'axios';
import './App.css';

function App() {

  const [userName,setusername]=useState('');
  const [userPhone,setuserphone]=useState('');

  const [fetchData,setfetchData]=useState([]);


  //for fetch data...
  useEffect(()=>{
    Axios.get('http://localhost:3002/fetch').then((res)=>{
      setfetchData(res.data);
    })
  },[]);



  //for insert data...
  const submitData=()=>{
    Axios.post('http://localhost:3001/insert',{
      userName:userName,
      userPhone:userPhone
  }).then((res)=>{
      console.log(res);
    });
  };


  //delete data
  const deleteData=(id)=>{
    Axios.delete(`http://localhost:3003/delete/${id}`);
  };


  return (
    <div className="">
      <h1 className='text-center'>Crud Application with React</h1>
      <hr/>
      <div className='inputBox container'>
        <div className='row'>
        <div className='col-md-4'>
          <h4>ADD USER</h4>
          <hr/>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <input className='form-control' onChange={(e)=>{setusername(e.target.value)}} type="text" placeholder="Enter Your User Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User Phone</Form.Label>
            <input className='form-control' onChange={(e)=>{setuserphone(e.target.value)}} type="text" placeholder="Enter Your User Phone" />
          </Form.Group>
      
          <Button onClick={submitData} className='form-control' variant="primary" type="submit">Submit</Button>
        </Form>
        </div>


        <div className='col-md-2'>
        
        </div>


        <div className='col-md-6'>
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
              fetchData.map((value)=>
              <tr>
                <td>{value.id}</td>
                <td>{value.userName}</td>
                <td>{value.userPhone}</td>
                <td>{value.time}</td>
                <td><button className='btn btn-info'>Edit</button> <button onClick={()=> {deleteData(value.id)}} className='btn btn-danger'>Delete</button></td>
              </tr>
              )
            }

          </tbody>
        </Table>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
