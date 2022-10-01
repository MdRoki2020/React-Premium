import React, { useEffect, useState } from 'react'
// import { getUserDetails } from '../helper/SessionHelper'
import '../Style/Dashboard.css'
import {Table} from 'react-bootstrap'

const Dashboard = () => {


  const [userData,setUserData]=useState([]);


  // useEffect(()=>{

  //   getUserData();

  // },[])


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('UserDetails'));
    if (items) {
      setUserData(items);
    }
  }, []);

  console.log(userData);




  // const getUserData=()=>{
  //   getUserDetails().then((data)=>{
  //     setDataList(data);
  //   })
  // }




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
              <td>roki</td>
              <td>poki</td>
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
