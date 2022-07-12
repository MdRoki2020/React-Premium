import Axios from 'axios';
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import {useParams} from 'react-router-dom'


function Update() {

    const {id}=useParams();

    useEffect(()=>{
        Axios.get(`http://localhost:5000/${id}`).then((res)=>{
            console.log(res.data);
        })
      },[]);


    // useEffect(() => {
    //   Axios.get(`http://localhost:5000/${id}`).then((response) => {
    //     console.log(response.data);
    //   });
    // }, []);
  return (

    <div>
        <h3>Update Beers</h3>
        <span>{id}</span>
        <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>

            <form>
            <input type='text' placeholder='name' className='form-control my-3'/>
            <input type='text' placeholder='tagline' className='form-control my-3'/>
            <input type='text' placeholder='description' className='form-control my-3'/>
            <Button className='form-control my-3'>Add Beers</Button>
            </form>

            </div>
            <div className='col-md-4'></div>
        </div>
        </div>
    </div>
  )
}

export default Update
