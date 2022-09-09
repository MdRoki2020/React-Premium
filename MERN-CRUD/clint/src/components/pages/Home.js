import React, { useState } from 'react'
import {Modal,Form,Button } from 'react-bootstrap'
import '../Style/Home.css'
import { AiOutlineUserSwitch } from "react-icons/ai";

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
                    <form action='' method=''>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Label>Full Name</Form.Label>
                        <input type="text" className='form-control mb-3' placeholder="Enter Full Name" autoFocus required />

                        <Form.Label>Email address</Form.Label>
                        <input type="email" className='form-control mb-3' placeholder="Enter Email" autoFocus required />

                        <Form.Label>Password</Form.Label>
                        <input type="password" className='form-control mb-3' placeholder="Enter Password" autoFocus required />

                        <Form.Label>Profile Image</Form.Label>
                        <input type="file" className='form-control mb-3'/>


                      </Form.Group>

                      {/* <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group> */}
                    </form>
                  </Modal.Body>

                  <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button> */}
                    <Button className='form-control' variant="primary" onClick={handleClose}>
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
