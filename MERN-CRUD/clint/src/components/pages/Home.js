import React, { useRef, useState } from 'react'
import {Modal,Form,Button } from 'react-bootstrap'
import '../Style/Home.css'
import { AiOutlineUserSwitch } from "react-icons/ai";
import { ErrorToast, IsEmail, IsEmpty } from '../helper/FormHelper';
import { useNavigate } from 'react-router-dom';
import { Membership } from '../Api Request/ApiRequest';

const Home = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let FullNameRef,EmailRef,PasswordRef,ImgRef=useRef();
  let navigate=useNavigate()

  const OnMembership=()=>{
    const fullName=FullNameRef.value;
    const email=EmailRef.value;
    const password=PasswordRef.value;
    const image=ImgRef.value;

    if(IsEmail(email)){
      ErrorToast("Valid Email Address Required");
    }else if(IsEmpty(fullName)){
      ErrorToast("Full Name Is Required");
    }else if(IsEmpty(password)){
      ErrorToast("Password Is Required");
    }else{
      Membership(fullName,email,password,image).then((result)=>{
        if(result===true){
          navigate('/Home')
        }
      })
    }
  }


  return (
        
        <div className='wrapper'>
          <div className='container'>
            <div className='row'>

            <div className='col-md-3'></div>
            <div className='col-md-6'>
            <div className='textWrapper'>


            <div className='title'>

              <h1>Welcome to Rich World</h1>

              </div>
              <div className='description'>

                <p>Get Free Membership And Come To Our World. After That Have A Good Time With Your Partner ND Every Premium Rocking Moment Share Our Timeline.</p>
                          
              </div>
              <div className='membershipButton'>
                <button onClick={handleShow} className='btn shadow memberShipButton'>Membership <AiOutlineUserSwitch /></button>
              </div>


              <Modal show={show} onHide={handleClose}>

                  <Modal.Header closeButton>
                    <Modal.Title>Get membership</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Label>Full Name</Form.Label>
                        <input ref={(input)=>FullNameRef=input} type="text" className='form-control mb-3' placeholder="Enter Full Name"  required />

                        <Form.Label>Email address</Form.Label>
                        <input ref={(input)=>EmailRef=input} type="email" className='form-control mb-3' placeholder="Enter Email"  required />

                        <Form.Label>Password</Form.Label>
                        <input ref={(input)=>PasswordRef=input} type="password" className='form-control mb-3' placeholder="Enter Password"  required />

                        <Form.Label>Profile Image</Form.Label>
                        <input ref={(input)=>ImgRef=input} type="file" className='form-control mb-3'/>


                      </Form.Group>

                    
                  </Modal.Body>

                  <Modal.Footer>

                    <Button className='form-control' variant="info" onClick={OnMembership }>
                      Membership
                    </Button>
                    
                  </Modal.Footer>

              </Modal>


            </div>
            </div>
            <div className='col-md-3'></div>

            </div>
          </div>
        </div>
        
  )
}

export default Home
