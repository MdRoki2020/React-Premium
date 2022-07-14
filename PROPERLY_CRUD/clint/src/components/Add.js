import React from 'react'
import { Button } from 'react-bootstrap'

function Add() {
  return (
    <div>
        <h3>Add Beers</h3>
        <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>

            <form>
            <input type='text'  placeholder='name' className='form-control my-3'/>
            <input type='text' placeholder='tagline' className='form-control my-3'/>
            <input type='text' placeholder='description' className='form-control my-3'/>
            <Button className='form-control'>Add Beers</Button>
            </form>

            </div>
            <div className='col-md-4'></div>
        </div>
        </div>
    </div>
  )
}

export default Add
