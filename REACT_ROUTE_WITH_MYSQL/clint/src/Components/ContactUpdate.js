import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ContactUpdate() {


    const [userName,setUserName]=useState('');
    const [userPhone,setUserPhone]=useState('');

  //for fetching data...
  const {id}=useParams();

  useEffect(
    ()=>{
      Axios.get("http://localhost:3004/update").then(res=>{
        setUserName(res.data)
      }).catch(err=>console.error(err))
    },[]
  )


  function submit(e){
    e.preventDefault()
    Axios.post("http://localhost:3004/update",data).then(res=>{
      console.log(res.data)
      const mydata=[...userName,res.data]
      setUserName(mydata)
    }).catch(err=>console.error(err))
  }



  console.log(id)

  

  return (
    <div>
        <section className='py-4 bg-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h4>Update Contact Us</h4>
            </div>
            <div className='col-md-8 my-auto'>
              <h6 className='float-end'>Update / Contact Us</h6>
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
                            <h6>Update Contact Form</h6>
                            <hr />
                            <form action=''>
                              <div className='form-group'>
                                  <label className='mb-1'>User Name</label>
                                  <input type='text' onChange={(e)=>{setUserName(e.target.value)}} className='form-control'  placeholder='Enter User Name'/>
                              </div>
                              <div className='form-group my-2'>
                                  <label className='mb-1'>Phone Number</label>
                                  <input type='text' onChange={(e)=>{setUserPhone(e.target.value)}} className='form-control'  placeholder='Enter Phone Number'/>
                              </div>
                              <div className='form-group my-3'>
                                  <button className='btn btn-primary form-control'  type='submit'>Submit</button>
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
