import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function ContactUpdate() {

  const {id}=useParams();


    const [userName,setUserName]=useState('');
    const [userPhone,setUserPhone]=useState('');

  
    // useEffect(()=>{
    //   const getDataById=async()=>{
    //     const {data}=await axios.get(`http://localhost:3002/fetch/${id}`)
    //     setUserName(data.userName)
    //     setUserPhone(data.userPhone)

    //   }
    //   getDataById()
    // },[id])


    // useEffect(()=>{
    //   axios.get(`http://localhost:3002/fetch`+id).then((res)=>{
    //     console.log(res.data);
    //   })
    // })

    // const baseURL = "http://localhost:3002/fetch";

    // useEffect(() => {
    //   axios.get(`http://localhost:3002/fetch/${id}`).then((response) => {
    //     console.log(response);
    //   });
    // }, []);

    // useEffect(async()=>{
    //   const response=await fetch(`http://localhost:3002/fetch/${id}`);
    //   const data=await response.json();
    //   console.log(data);
    // }, []);

    // const updateData=(id)=>{
    //   fetch("http://localhost:3002/fetch"+id,{
    //     method:"get",
    //   })
    //   .then((res)=>res.json())
    //   .then((result)=>{
    //     console.log(result);
    //   })
    //   .catch((error)=>console.log("error",error));
    // };
  

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
                            <form >
                              <div className='form-group'>
                                  <label className='mb-1'>User Name</label>
                                  <input type='text' value={userName} onChange={(e)=>{setUserName(e.target.value)}} className='form-control'  placeholder='Enter User Name'/>
                              </div>
                              <div className='form-group my-2'>
                                  <label className='mb-1'>Phone Number</label>
                                  <input type='text' value={userPhone}  onChange={(e)=>{setUserPhone(e.target.value)}} className='form-control'  placeholder='Enter Phone Number'/>
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
