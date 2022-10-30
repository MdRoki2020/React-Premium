import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLayout from './Layout/HomeLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import DashboardLayout from './Layout/DashboardLayout';
import AdminDashboardLayout from './Layout/AdminDashboardLayout';
import AdminLoginLayout from './Layout/AdminLoginLayout';
import CreateFoodLayout from './Layout/CreateFoodLayout';
import SendOtp from './components/pages/SendOtp';
import VerifyOtp from './components/pages/VerifyOtp';
import CreatePassword from './components/pages/CreatePassword';
import FoodStoreLayout from './Layout/FoodStoreLayout';
import ProductDetailsLayout from './Layout/ProductDetailsLayout';


function App() {
  return (
    <div>
      <Fragment>
        <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<DashboardLayout />}/>

          <Route path="/adminDashboard" element={<AdminDashboardLayout />}/>
          <Route path="/adminLogin" element={<AdminLoginLayout />}/>
          <Route path="/addFood" element={<CreateFoodLayout />}/>
          <Route path="/foodStore" element={<FoodStoreLayout />}/>
          <Route path="/foodDetails" element={<ProductDetailsLayout />}/>


          <Route path="/sendOtp" element={<SendOtp />}/>
          <Route path="/verifyOtp" element={<VerifyOtp />}/>
          <Route path="/createPassword" element={<CreatePassword />} />
          
        </Routes>

        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
