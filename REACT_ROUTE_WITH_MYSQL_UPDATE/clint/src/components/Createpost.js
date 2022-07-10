import React from 'react'
import Axios from 'axios'

function Createpost() {

    const submit=()=>{
        
    }
  return (
    <div>
        <div className='container'>
            <div className='row'>
            <div className='col-md-4'>

            </div>

            <div className='col-md-4'>
                <h3>From</h3>
                <form>
                    <input className='form-control my-2' placeholder='Enter UserName'/>
                    <input className='form-control mb-2' placeholder='Enter Phone Number'/>
                    <button onClick={submit} className='btn btn-primary'>Submit</button>
                </form>
            </div>

            <div className='col-md-4'>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default Createpost
