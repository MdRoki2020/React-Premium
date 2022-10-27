import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactCodeInput from 'react-code-input-2'
import { ErrorToast } from '../helper/FormHelper';
import { getEmail } from '../helper/SessionHelper';
import { RecoverVerifyOTPRequest } from '../Api Request/ApiRequest';
const VerifyOtp = () => {

    let nevigate=useNavigate();
    let [OTP,SetOTP]=useState("")

    const SubmitOTP = () => {
        if(OTP.length===6){
            RecoverVerifyOTPRequest(getEmail(),OTP).then((result)=>{
                if(result===true){
                    nevigate("/createPassword");
                }
            })
        }
        else {
            ErrorToast("Enter 6 Digit Code");
        }
      }

  return (
    <Fragment>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90  p-4">
                        <div className="card-body shadow">
                            <h4>OTP VERIFICATION </h4>
                            <p>A 6 Digit verification code has been sent to your email address. </p>
                            <ReactCodeInput type='number' onChange={(value)=>SetOTP(value)} fields={6} />
                            <br/>  <br/>
                            <button onClick={SubmitOTP} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
  )
}

export default VerifyOtp
