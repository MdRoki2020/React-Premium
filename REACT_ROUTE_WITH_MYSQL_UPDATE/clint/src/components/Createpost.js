import React, { useState } from 'react'
import Axios from 'axios';
import {Formik,Field,Form} from "formik";

function Createpost() {

    const onSubmit=(data)=>{
        Axios.post('http://localhost:3001/posts',data).then((res)=>{
            console.log(res);
        })
    }

    const initialValues={
        user_name:"",
        phone_number:"",
    };

  return (
    <div>
        <div className='container'>
            <div className='row'>
            <div className='col-md-4'>

            </div>

            <div className='col-md-4'>
                <h3>From</h3>
                <Formik initialValues={initialValues} onSubmit={onSubmit} >
                <Form>
                    <Field type='text' autoComplete='off' name='user_name' className='form-control my-2' placeholder='Enter UserName'/>
                    <Field type='text' autoComplete='off' name='phone_number' className='form-control mb-2' placeholder='Enter Phone Number'/>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </Form>
                </Formik>
            </div>

            <div className='col-md-4'>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default Createpost
