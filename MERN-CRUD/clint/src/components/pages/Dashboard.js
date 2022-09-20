import React, { useEffect, useState } from 'react'
import { getUserDetails } from '../helper/SessionHelper'
import '../Style/Dashboard.css'
import {Table} from 'react-bootstrap'

const Dashboard = () => {


  const [dataList,setDataList]=useState([]);


  useEffect(()=>{

    getUserData();

  },[])

  console.log(dataList);

  const getUserData=()=>{
    getUserDetails().then((data)=>{
      setDataList(data);
    })
  }

  console.log(dataList)

  // const getUserData=()=>{
  //   const data=getUserDetails();
  //   console.log(data);
  //   setDataList(data);
  // }

  // const data=getUserDetails();
  // setDataList(data);
  // console.log(dataList);

  
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
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                
                dataList.map((value,key)=>
                <tr key={key}>
          
                  <td>{value.FullName}</td>
                  <td>{value.Email}</td>
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
