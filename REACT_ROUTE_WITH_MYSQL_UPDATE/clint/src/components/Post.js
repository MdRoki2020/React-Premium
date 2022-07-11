import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import {Card,Button} from 'react-bootstrap'

function Post() {
    let {id}=useParams();
    const [postObject,setPostObject]=useState({});

    useEffect(()=>{
        Axios.get(`http://localhost:3001/posts/byId/${id}`).then((res)=>{
            setPostObject(res.data);
        })
    },[])
  return (

    <div>
      
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <h3 className='text-center my-3'>Details</h3>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{postObject.id}</Card.Title>
                    <Card.Text>{postObject.user_name}</Card.Text>
                    <Card.Text>{postObject.phone_number}</Card.Text>
                    <Button variant="primary">BUY NOW</Button>
                </Card.Body>
           </Card>
            </div>
            <div className='col-md-4'></div>
        </div>
      </div>
    </div>
  )
}

export default Post
