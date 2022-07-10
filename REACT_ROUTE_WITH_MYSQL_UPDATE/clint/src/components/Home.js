import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

function Home() {
    const [fetchdata,setfetchdata]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/fetch").then((res)=>{
            setfetchdata(res.data);
        })
    },[])
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
            
            <h3 className='text-center my-3'>Show User</h3>

            <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>USERNAME</th>
                <th>PHONE NUMBER</th>
                </tr>
            </thead>
            <tbody>
            {
                fetchdata.map((value)=>
                <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.user_name}</td>
                <td>{value.phone_number}</td>
                </tr>
                )
            }
            </tbody>
            </Table>

            </div>
            <div className='col-md-4'></div>
        </div>
      </div>
    </div>
  )
}

export default Home
