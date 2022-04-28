import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Axios from 'axios';


function App() {

  const [username,setusername]=useState('');
  const [userpassword,setuserpassword]=useState('');

  const register=()=>{
    Axios.post("http://localhost:3000/register",{
      username:username,
      userpassword:userpassword
    }).then((response)=>{
      console.log(response);
    });
  };

  return (
    <div className="container">
      <div class='col-md-4'></div>
      <div class='col-md-4'>
        <h2>REGISTRATION</h2>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" onChange={(e)=>{setusername(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" onChange={(e)=>{setuserpassword(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="submit" onClick={register} class="btn btn-primary form-control">Submit</button>
        </form>
      </div>
      <div class='col-md-4'></div>
    </div>
  );
}

export default App;
