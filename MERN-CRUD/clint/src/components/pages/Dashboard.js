import React, { useEffect, useState } from 'react'
import { getUserDetails } from '../helper/SessionHelper'
import '../Style/Dashboard.css'
import {Table} from 'react-bootstrap'

const Dashboard = () => {

  const [dataList,setDataList]=useState([]);

  useEffect(()=>{
    getUserData();
  },[])

  const getUserData=()=>{
    getUserDetails().then((data)=>{
      setDataList(data);
    })
  }
  
  return (
    <div className='DashboardtopSpace'>
      <h1>Dashboard</h1>
      <div className='container'>
        <div className='row'>
          <div className='3'></div>
          <div className='6'>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>             {/* <th>Image</th> */}
              </tr>
            </thead>
            <tbody>
              {
                dataList.map((value)=>


                <tr>
                <td>{value.FullName}</td>
                <td>{value.Email}</td>
                {/* <td><img className='img-fluid img-thumbnail' src={value.Img} alt='product_Image' width="80"/></td> */}

                </tr>


                )
              }
            </tbody>
          </Table>

          </div>
          <div className='3'></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
