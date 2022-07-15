import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Axios  from 'axios'

function Add() {

  const [name,setName] = useState("");
  const [tagline,setTagline] = useState("");
  const [description,setDescription] = useState("");


  const submitData=()=>{
    Axios.post('http://localhost:5000/',{
      name:name,
      tagline:tagline,
      description:description

    }).then((res)=>{
      if(res.send === "haha"){
        console.log("its okey");
      }
    })
  }


  return (
    <div>
        <h3>Add Beers</h3>
        <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>

            <form>
            <input type='text' onChange={(e)=>{setName(e.target.value)}}  placeholder='name' className='form-control my-3'/>
            <input type='text' onChange={(e)=>{setTagline(e.target.value)}} placeholder='tagline' className='form-control my-3'/>
            <input type='text' onChange={(e)=>{setDescription(e.target.value)}} placeholder='description' className='form-control my-3'/>
            <Button onClick={submitData} className='form-control'>Add Beers</Button>
            </form>

            </div>
            <div className='col-md-4'></div>
        </div>
        </div>
    </div>
  )
}

export default Add
