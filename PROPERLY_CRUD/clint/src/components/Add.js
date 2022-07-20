import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Axios  from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Add=()=> {

  const [name,setName] = useState("");
  const [tagline,setTagline] = useState("");
  const [description,setDescription] = useState("");
  const [file,setFile]=useState("");

  const [successmessage,setSuccessMessage]=useState("");


  const submit=()=>{

    const data=new FormData();

    data.append('name',name);
    data.append('tagline',tagline);
    data.append('description',description);
    data.append('file',file);


    Axios.post('http://localhost:5000/',data).then((res)=>{
      console.log('success')
      if(res.data.successmessage){
        setSuccessMessage(res.data.successmessage);
        sweetAlert();
        }else{
            
        }
    }).catch((res)=>{
      console.error('error')
    })

    // Axios.post('http://localhost:5000/',{
    //   name:name,
    //   tagline:tagline,
    //   description:description,
    //   file:file

    // }).then((res)=>{
    //   if(res.data.successmessage){
    //       setSuccessMessage(res.data.successmessage);
    //       sweetAlert();
    //   }else{
        
    //   }
    // })


  }

  const sweetAlert=(successmessage)=>{
    {
      Swal.fire(
        'Student Added Successfully Done !',
        'You clicked the button!',
        'success'
      )
    }
  }

  return (

    
    <div>

      

        <h3>Add Beers</h3>
        <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
            <div className="alert alert-success" role="alert">
            <span>{successmessage}</span>
            </div>
            <form action="#" method="post" enctype="multipart/form-data">
            <input type='text' onChange={(e)=>{setName(e.target.value)}}  placeholder='name' className='form-control my-3'/>
            <input type='text' onChange={(e)=>{setTagline(e.target.value)}} placeholder='tagline' className='form-control my-3'/>
            <input type='text' onChange={(e)=>{setDescription(e.target.value)}} placeholder='description' className='form-control my-3'/>
            <input type='file' multiple  onChange={(e)=>{setFile(e.target.files[0])}} placeholder='Image' className='form-control my-3'/>
            <Button onClick={submit}  className='form-control'>Add Beers</Button>
            </form>

            </div>
            <div className='col-md-4'></div>
        </div>
        </div>
    </div>
  )
}

export default Add
