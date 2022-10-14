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
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";



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
          <a href="#" className=" mt-1 text-dark" style={{marginLeft: "5rem"}} ><MdNotificationsActive /></a>
          <a href="#" className="mr-1 mt-1 text-dark"><IoIosContact /></a>

        </div>
      </nav>
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
                