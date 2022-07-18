import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Axios  from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Login() {

  let navigate = useNavigate ();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [loginStatus,setLoginStatus]=useState("");

  const login=()=>{
    Axios.post('http://localhost:5000/login',{
      email:email,
      password:password,
    }).then((res)=>{
      if(res.data.message){
        setLoginStatus(res.data.message);
        loginAlert();
      }else{
        navigate('/dashboard');
      }
    })
    
  }


  const loginAlert=()=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email Or Password Incorrect !',
      footer: 'Try Again Later !'
    })
  }


  return (
    <div>
      
        <h3>Login</h3>
        <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>

            <div class="alert alert-success" role="alert">
            <span>{loginStatus}</span>
            </div>

            <form>
            <input type='text' onChange={(e)=>{setEmail(e.target.value)}}  placeholder='email' className='form-control my-3'/>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' className='form-control my-3'/>
            <Button onClick={login} className='form-control'>Add Beers</Button>
            </form>

            </div>
            <div className='col-md-4'></div>
        </div>
        </div>
    </div>
  )
}

export default Login
