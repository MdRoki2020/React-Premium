import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Table } from 'react-bootstrap';
import Axios from 'axios';
import './App.css';

function App() {

  const [userName,setUsername]=useState('');
  const [userPhone,setuserPhone]=useState('');

  const submitData=()=>{
    Axios.post('http://localhost:3001/api/insert',{userName:userName,userPhone:userPhone}
    ).then(()=>{
      alert('Insert Successful');
    })
  }


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
            <Form.Control onClick={(e)=>{ setUsername(e.target.value) }} type="text" placeholder="Enter Your User Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User Phone</Form.Label>
            <Form.Control onClick={(e)=>{setuserPhone(e.target.value)}} type="text" placeholder="Enter Your User Phone" />
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
            <tr>
              <td>1</td>
              <td>Roki</td>
              <td>01717453205</td>
              <td>10:37</td>
              <td><button className='btn btn-info'>Edit</button> <button className='btn btn-danger'>Delete</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Tithee</td>
              <td>01642861758</td>
              <td>11:37</td>
              <td><button className='btn btn-info'>Edit</button> <button className='btn btn-danger'>Delete</button></td>
            </tr>
          </tbody>
        </Table>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
