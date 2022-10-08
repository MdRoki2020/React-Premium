import React, { useEffect, useState } from 'react'
import { getUserDetails } from '../helper/SessionHelper'
import '../Style/Dashboard.css'

const Dashboard = () => {

  const [userData,setUserData]=useState([]);


  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('UserDetails'));
  //   if (items) {
  //     setUserData(items);
  //   }
  // }, []);


  useEffect(()=>{

    setUserData(getUserDetails())

  },[])


  // const getUserData=()=>{
  //   getUserDetails()
  // }


  console.log(userData);


  
  return (
    <div className='DashboardtopSpace'>
      <h1>Dashboard</h1>
      <div className='container'>
        <div className='row'>
          <div className='3'></div>
          <div className='6'>


          <table className='table table-striped table-bordered table-hover table-responsive'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
                
              <tr >
                <td>{userData.FullName}</td>
                <td>{userData.Email}</td>
              </tr>

            </tbody>
          </table>

          </div>
          <div className='3'></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
