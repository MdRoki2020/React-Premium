import React, { Fragment, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { RecoverResetPassRequest } from '../Api Request/ApiRequest';
import { ErrorToast, IsEmpty } from '../helper/FormHelper';
import { getEmail, getOTP } from '../helper/SessionHelper';

const CreatePassword = () => {

  let navigate=useNavigate();
  let passwordRef,confirmPasswordRef=useRef();

  const resetPass=()=>{
    const password=passwordRef.value;
    const confirmPassword=confirmPasswordRef.value;

    if(IsEmpty(password)){
      ErrorToast("Password Required");
  }
  else if(IsEmpty(confirmPassword)){
      ErrorToast("Confirm Password Required");
  }
  else if(password!==confirmPassword){
      ErrorToast("Password Dosen't Match");
  }else{
      RecoverResetPassRequest(getEmail(),getOTP(),password).then((result)=>{
          if(result===true){
              navigate("/login");
          }
      })
  }
}

  return (
    <Fragment>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90 p-4">
                        <div className="card-body">
                            <h4>SET NEW PASSWORD</h4>
                            <br/>
                            <label>Your email address</label>
                            <input value={getEmail()} readOnly={true}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                            <br/>
                            <label>New Password</label>
                            <input ref={(input)=>passwordRef=input} placeholder="New Password" className="form-control animated fadeInUp" type="password"/>
                            <br/>
                            <label>Confirm Password</label>
                            <input ref={(input)=>confirmPasswordRef=input} placeholder="Confirm Password" className="form-control animated fadeInUp" type="password"/>
                            <br/>
                            <button onClick={resetPass} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
  )
}

export default CreatePassword
