import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='container'>
    <div className='row'>
    <h2>Admin Dashboard</h2>
    <form className="row g-3">
        <div className="col-md-6">
            <label for="inputEmail4" className="form-label text-dark">Food Name</label>
            <input type="text" className="form-control" id="inputEmail4" placeholder='Food Name'/>
        </div>
        <div className="col-md-6">
            <label for="inputState" className="form-label text-dark">Food Type</label>
            <select id="inputState" className="form-select">
            <option selected>Choose Food</option>
            <option>Sanduiche</option>
            <option>Burgar</option>
            <option>Pizza</option>
            <option>France Fry</option>
            </select>
        </div>
        <div className="col-12">
            <label for="inputAddress" className="form-label text-dark">Food Price</label>
            <input type="number" className="form-control"  id="inputAddress" placeholder="Food Price"/>
        </div>
        <div className="col-12">
            <label for="inputAddress2" className="form-label text-dark">Stock Food Quantity</label>
            <input type="number" className="form-control"  id="inputAddress2" placeholder="Food Quantity"/>
        </div>
        <div className="col-md-6">
            <label for="inputCity" className="form-label text-dark">Image</label>
            <input type="file" className="form-control" id="inputCity"/>
        </div>
        <div className="col-md-6">
        <label for="exampleFormControlTextarea1" className="form-label text-dark">Food Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter Food Description' rows="3"></textarea>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-info">Added Food</button>
        </div>
    </form>
    </div>
    </div>

  )
}

export default AdminDashboard
