import React, { useState } from 'react'
import Axios from 'axios';

export default function Admin() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const login=()=>{
    Axios.post('http://localhost:3002/login',{
      email:email,
      password:password
    }).then((res)=>{
      console.log(res);
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <h2 className='my-3'>Login</h2>
        <form>
        <div className="form-group my-1">
          <label for="exampleInputEmail1">Email address</label>
          <input type="text" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="text" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" onClick={login} className="btn btn-primary form-control my-3">Login</button>
      </form>
        </div>
        <div className='col-md-4'>
          <h2>{email}</h2>
        </div>
      </div>
    </div>
  )
}

