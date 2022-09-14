import React, { Fragment, useRef } from 'react'
import { Card,InputGroup,Form, Button } from 'react-bootstrap'
import '../Style/Login.css'
import { BsFillEnvelopeFill,BsUnlockFill,BsBoxArrowInRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ErrorToast, IsEmail, IsEmpty } from '../helper/FormHelper';
import FullScreenLoader from '../common/FullScreenLoader';
import { useNavigate } from 'react-router-dom';
import { LoginRequest } from '../Api Request/ApiRequest';


const Login = () => {

    let EmailRef,PasswordRef,Loader=useRef();

    let navigate=useNavigate();

    const OnLogin=()=>{
        
        let Email=EmailRef.value;
        let Password=PasswordRef.value;

        // Loader.classList.remove('d-none');

        if(IsEmail(Email)){
            ErrorToast("Valid Email Address Required");
        }else if(IsEmpty(Email)){
            ErrorToast("Email Is Required");
        }else if(IsEmpty(Password)){
            ErrorToast("Password Is Required");
        }else{
            LoginRequest(Email,Password).then((result)=>{
                if(result===true){
                    Loader.classList.add('d-none');
                    navigate("/dashboard");
                }else{
                    console.log('something went wrong');
                }
            })
        }
    }

  return (
    <Fragment>
        <div className='wrapper'>
        <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
            <section className='topSpace'>
                <h3>User Login</h3>
            </section>
            </div>
            <div className='col-md-4'>
            <Card className='topSpaceLoginForm px-4 py-5 shadow'>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><BsFillEnvelopeFill/></InputGroup.Text>
                <Form.Control ref={(input)=>EmailRef=input} placeholder="Enter Email" aria-label="Email" aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><BsUnlockFill/></InputGroup.Text>
                <Form.Control ref={(input)=>PasswordRef=input} placeholder="Enter Password" aria-label="Password" aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <Button onClick={OnLogin} className='form-control'>Login <BsBoxArrowInRight/></Button>
            </InputGroup>
            <span className='popupText'>Not a Member? <Link to="/" className='fw-bold'>Membership</Link></span>
            </Card>
            </div>
            <div className='col-md-4'>

            </div>
        </div>
    </div>

    <div className='d-none' ref={(div)=>Loader=div}>

        <FullScreenLoader />

    </div>
        </div>
    </Fragment>
  )
}

export default Login
