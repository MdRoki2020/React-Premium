import React from 'react'
import { Fragment } from 'react'

const PostVideo = () => {
  return (
    <Fragment>
        <h2 className='text-center'>Post Video</h2>

        <div className='container'>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    <div className='mt-4'>
                        <div className='mb-3'>
                            <input className='form-control' type='text' placeholder='Title'/>
                        </div>
                        <div className=''>
                            <input className='form-control' type='file'/>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'></div>
            </div>
        </div>
    </Fragment>
  )
}

export default PostVideo