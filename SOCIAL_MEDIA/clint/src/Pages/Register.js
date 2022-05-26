import React from 'react'

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <div className='container'>
          <div className='row'>
              <div className='col-md-4'>

              </div>
              <div className='col-md-4'>
                  <form>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username..." aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Password..." aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div class="input-group mb-3">
                    <button type="submit" class="form-control" aria-label="Username" aria-describedby="basic-addon1">Sign In</button>
                  </div>

                  </form>
              </div>
              <div className='col-md-4'>
                  
              </div>
          </div>
      </div>
    </div>
  )
}
