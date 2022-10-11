import React, { Fragment, useRef, useState } from 'react'
import {Modal,Form,Button } from 'react-bootstrap'
import '../Style/Home.css'
import { AiOutlineUserSwitch } from "react-icons/ai";
import { BsPlusSquare,BsXCircle } from "react-icons/bs";
import { ErrorToast, getBase64, IsEmail, IsEmpty } from '../helper/FormHelper';
import Swal from 'sweetalert2'
import { Membership } from '../Api Request/ApiRequest';
import FullScreenLoader from '../common/FullScreenLoader';
import { Link } from 'react-router-dom';


const Home = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let FullNameRef,EmailRef,PasswordRef,ImgRef,Loader,ImgView=useRef();

  const PreviewImage = () => {
    let ImgFile = ImgRef.files[0];
    getBase64(ImgFile).then((base64Img)=>{
      ImgView.src=base64Img;
    })
}

const close=()=>{
  handleClose();
}

  const OnMembership=()=>{

    let fullName=FullNameRef.value;
    let email=EmailRef.value;
    let password=PasswordRef.value;
    let image=ImgView.src;

    // Loader.classList.remove('d-none');


    if(IsEmail(email)){
      ErrorToast("Valid Email Address Required");
    }else if(IsEmpty(email)){
      ErrorToast("Email Is Required");
    }else if(IsEmpty(fullName)){
      ErrorToast("Full Name Is Required");
    }else if(IsEmpty(password)){
      ErrorToast("Password Is Required");
    }else{
      Membership(fullName,email,password,image).then((result)=>{
        if(result===true){
          Loader.classList.add('d-none');

          FullNameRef.value="";
          EmailRef.value="";
          PasswordRef.value="";
          ImgRef.value="";
  
          successMes();
          handleClose();
          

        }else{
          console.log('something went wrong');
        }
      })
    }
  }


  const successMes=()=>{
    Swal.fire(
      'You Got Membership !',
      'You clicked the button!',
      'success'
    )
}

  return (
        <Fragment>
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

                  <Modal.Header  >
                    <Modal.Title><span className='membershipHeading'>Get membership</span> <span onClick={close} className='closeIcon'><BsXCircle /></span></Modal.Title>
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
                        <input onChange={PreviewImage} ref={(input)=>ImgRef=input} type="file" className='form-control mb-3'/>


                      </Form.Group>

                    
                  </Modal.Body>

                  <Modal.Footer>

                    <Button className='form-control mb-2' onClick={OnMembership }>
                      Membership <BsPlusSquare/>
                    </Button>

                    <span className='popupText'>Already Membership Done? <Link to="/login" className='fw-bold'>Login</Link></span>
                    
                  </Modal.Footer>

              </Modal>


            </div>
            </div>
            <div className='col-md-3'></div>

            </div>
          </div>
        </div>


        <div className='d-none' ref={(div)=>Loader=div}>

        <FullScreenLoader />

        </div>

        </Fragment>
        
  )
}

export default Home
