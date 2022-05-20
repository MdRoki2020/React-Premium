import React, { useState } from 'react';
import Axios from 'axios';

export default function Contact() {

  const [userName,setUserName]=useState('');
  const [userPhone,setUserPhone]=useState('');


  const submitData=()=>{
    Axios.post('http://localhost:3001/insert',{
      userName:userName,
      userPhone:userPhone
    }).then((res)=>{
      console.log(res);
    })
  }
  return (
    <div>
        <section className='py-4 bg-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h4>Contact Us</h4>
            </div>
            <div className='col-md-8 my-auto'>
              <h6 className='float-end'>Home / Contact Us</h6>
            </div>
          </div>
        </div>
    </section>

      <section className='section'>
        <div className='container'>
            <div className='card shadow'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h6>Contact Form</h6>
                            <hr />
                            <form >
                              <div className='form-group'>
                                  <label className='mb-1'>User Name</label>
                                  <input type='text' onChange={(e)=>{setUserName(e.target.value)}} className='form-control'  placeholder='Enter User Name'/>
                              </div>
                              <div className='form-group my-2'>
                                  <label className='mb-1'>Phone Number</label>
                                  <input type='text' onChange={(e)=>{setUserPhone(e.target.value)}} className='form-control'  placeholder='Enter Phone Number'/>
                              </div>
                              <div className='form-group my-3'>
                                  <button className='btn btn-primary form-control'  type='submit' onClick={submitData}>Submit</button>
                              </div>
                            </form>
                        </div>
                        <div className='col-md-6 border-start'>
                            <h5 className='main-heading'>Address Information</h5>
                            <div className='underline'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </div>
  )
}
