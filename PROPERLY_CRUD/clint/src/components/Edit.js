import React, { useEffect, useState } from 'react'
import { Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function Edit() {

    const {id}=useParams();
    const [objectPost,setobject] = useState({});

    // const [name,setName] = useState("");
    // const [tagline,setTagline] = useState("");
    // const [description,setDescription] = useState("");

    // fetch data by id
    useEffect(()=>{
        Axios.get(`http://localhost:5000/${id}`).then((res)=>{
            setobject(res.data);
            console.log(res.data);
        })
      },[id]);


      const submitData=()=>{
        // Axios.post('http://localhost:5000/insert',{
        //   name:name,
        //   tagline:tagline,
        //   description:description
        // }).then((res)=>{
        //   console.log(res);
        // })
      }

  return (

    <div>
        <h3>Update Data</h3>
    <div className='container'>
    <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>

        <form>
        <input type='text'  placeholder='name'   className='form-control my-3'/>
        <input type='text'  placeholder='tagline'   className='form-control my-3'/>
        <input type='text'  placeholder='description'   className='form-control my-3'/>
        <Button type='submit' className='form-control my-3' onClick={submitData}>Add Beers</Button>
        </form>

        </div>
        <div className='col-md-4'>
          <h3>{objectPost[0].id}</h3>
        </div>
    </div>
    </div>
</div>
  )
}

export default Edit
