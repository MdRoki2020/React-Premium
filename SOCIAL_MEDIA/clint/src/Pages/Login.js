import React,{useState} from 'react'
import Axios from 'axios'

export default function Login() {

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const [errorMessage,setErrorMessage]=useState("");

  const login=()=>{
    Axios.post("http://localhost:5000/user/login",{username:username,password:password}).then((res)=>{
      if(res.data.loggedIn){
        localStorage.setItem("loggedIn",true);
        localStorage.setItem("username",res.data.username);
      }else{
        setErrorMessage(res.data.message);
      }
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <div className='container'>
          <div className='row'>
              <div className='col-md-4'>

              </div>
              <div className='col-md-4'>
                  <form>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} className="form-control" placeholder="Username..." aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" placeholder="Password..." aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                    <button type="submit" onClick={login} className="form-control" aria-label="Username" aria-describedby="basic-addon1">Login</button>
                  </div>
                  {errorMessage}

                  </form>
              </div>
              <div className='col-md-4'>
                  
              </div>
          </div>
      </div>
    </div>
  )
}
