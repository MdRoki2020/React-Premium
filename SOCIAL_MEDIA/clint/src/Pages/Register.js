import React, { useState } from 'react'
import Axios from 'axios'

export default function Register() {

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const register=()=>{
    Axios.post("http://localhost:5000/user/register",{username:username,password:password}).then((res)=>{
      console.log(res);
    })
  }

  return (
    <div>
      <h1>Register</h1>
      <div className='container'>
          <div className='row'>
              <div className='col-md-4'>

              </div>
              <div className='col-md-4'>
                  <form>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} class="form-control" placeholder="Username..." aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} class="form-control" placeholder="Password..." aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div class="input-group mb-3">
                    <button type="submit" onClick={register} class="form-control" aria-label="Username" aria-describedby="basic-addon1">Sign In</button>
                  </div>

                  </form>
              </div>
              <div className='col-md-4'>
                  
              </div>
          </div>
      </div>
    </div>
  )
}
