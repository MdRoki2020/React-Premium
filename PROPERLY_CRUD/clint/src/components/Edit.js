import React, { useEffect, useState } from 'react'
import { Button} from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Edit() {

    const {id}=useParams();
    const [object,setobject] = useState({});

    let navigate = useNavigate ();


    const [name,setName] = useState("");
    const [tagline,setTagline] = useState("");
    const [description,setDescription] = useState("");

    // fetch data by id
    useEffect(()=>{
        Axios.get(`http://localhost:5000/${id}`).then((res)=>{
            setobject(res.data[0]);
        })
      },[id]);


      const submitData=()=>{
        Axios.put('http://localhost:5000/',{
          id:id,
          name:name,
          tagline:tagline,
          description:description
        }).then((res)=>{
          console.log(res);
        })
        navigate("/");
      }


  return (

    <div>
        <h3 className='text-center'>Update Data</h3>
    <div className='container'>
    <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>

        <form>
        {/* <input type='hidden' placeholder='name' defaultValue={object.id} onChange={(e)=>{setName(e.target.value)}} className='form-control my-3'/> */}
        <input type='text' placeholder='name' defaultValue={object.name} onChange={(e)=>{setName(e.target.value)}}  className='form-control my-3'/>
        <input type='text' placeholder='tagline' defaultValue={object.tagline} onChange={(e)=>{setTagline(e.target.value)}}  className='form-control my-3'/>
        <textarea placeholder='description' defaultValue={object.description} onChange={(e)=>{setDescription(e.target.value)}} className='form-control my-3'/>
        <Button type='submit' className='form-control my-3' onClick={submitData}>Add Beers</Button>
        </form>

        </div>
        <div className='col-md-4'></div>
    </div>
    </div>
</div>
  )
}

export default Edit
