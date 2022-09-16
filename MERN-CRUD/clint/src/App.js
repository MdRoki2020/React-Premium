import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLayout from './Layout/HomeLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import DashboardLayout from './Layout/DashboardLayout';



function App() {
  return (
    <div>
      <Fragment>
        <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<DashboardLayout/>}/>
        </Routes>

        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
