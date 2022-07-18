import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Axios  from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Registration() {

  let navigate = useNavigate ();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [successmessage,setSuccessMessage]=useState("");

  const register=()=>{
    Axios.post("http://localhost:5000/register",{
        email:email,
        password:password
    }).then((res)=>{
        if(res.data.successmessage){
            setSuccessMessage(res.data.successmessage);
            registrationAlert();
        }else{
          
        }
      })
  }


  const registrationAlert=()=>{
    Swal.fire(
      'Your Registration Was Done!',
      'You clicked the button!',
      'success'
    )
  }


  return (
    <div>
      
        <h3>Registration</h3>
        <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>

            <div class="alert alert-success" role="alert">
            <span>{successmessage}</span>
            </div>

            <form>
            <input type='text' onChange={(e)=>{setEmail(e.target.value)}}  placeholder='email' className='form-control my-3'/>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' className='form-control my-3'/>
            <Button onClick={register} className='form-control'>Add Beers</Button>
            </form>

            </div>
            <div className='col-md-4'></div>
        </div>
        </div>
    </div>
  )
}

export default Registration
