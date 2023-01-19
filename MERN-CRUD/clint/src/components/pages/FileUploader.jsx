import React, { Fragment, useRef } from 'react'
import Swal from 'sweetalert2';
import { InsertRequest } from '../Api Request/ApiRequest';
import RoundLoader from '../common/RoundLoader';
import { ErrorToast, IsEmpty } from '../helper/FormHelper';

const FileUploader = () => {

    let fileRef,nameRef,Loader=useRef();

  const OnUpload=()=>{

    let image=fileRef.files[0];
    let name=nameRef.value;

    if(IsEmpty(image)){
        ErrorToast("image Required");
      }
      else if(IsEmpty(name)){
        ErrorToast("name Required");
      }else{

        Loader.classList.remove('d-none');

        const formData=new FormData();
        formData.append('file',image);
        formData.append('name',name);
  
  InsertRequest(formData,name).then((result)=>{
    if(result===true){

      Loader.classList.add('d-none');

      // fileRef.value="";
      // nameRef.value="";

      success();

    }
    else{
      Loader.classList.add('d-none');
      ErrorToast('Something Went Wrong');
      console.log('something went wrong');

    }
  })

    }
  }


  const success=()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Food Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>


            <h4 className='mt-4'>File Upload</h4>

            {/* <form enctype="multipart/form-data"> */}

                <input type='file' ref={(input)=>fileRef=input} className='form-control mb-2'/>

                <input type='text' ref={(input)=>nameRef=input} className='form-control mb-2' placeholder='Video Name'/>

                <button onClick={OnUpload} className='btn btn-primary '>Submit</button>

            {/* </form> */}


            </div>
        </div>
      </div>

      <div className='d-none' ref={(div)=>Loader=div}>

    <RoundLoader />

    </div>
    </Fragment>
  )
}

export default FileUploader
