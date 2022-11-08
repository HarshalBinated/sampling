import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Stock from './pages/Stock.jsx';
import Utilization from './pages/Utilization.jsx';
import Estimation from './pages/Estimation.jsx';
import View from './pages/View.jsx';
import Register from './pages/Register';
import Signin from './pages/Signin';
import logo from './images/logo.png';
import { IoIosContact } from "react-icons/io";
import { AiOutlineSearch, AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const App = () => {
  return (
    <>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a href="/"><img src={logo} className="icons" height="32px" /></a>
          <div class="box">
            <AiOutlineSearch />
            <input type="text" name="" placeholder='search..' />
          </div>
          <div class="btn-group" style={{  cursor: "pointer"}}>
            <div class=" dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{marginLeft: "3rem"}}>
              <IoIosContact />
            </div>
            <div class="dropdown-menu dropdown-menu-right">
              <p class="dropdown-item" type="button"><CgProfile/>  Profile</p>
              <p class="dropdown-item" type="button"><AiFillSetting/>   Setting</p>
              <p class="dropdown-item" type="button"><AiOutlineLogout/>   Logout</p>

            </div>
          </div>
          <a href="#" className=" mt-1 text-dark mr-4" ><MdNotificationsActive /></a>

        </div>
      </nav>
      {/* <Searchbar /> */}
      <Sidebar> 
        <Routes>

          <Route path="/" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/utilization" element={<Utilization />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default App;
