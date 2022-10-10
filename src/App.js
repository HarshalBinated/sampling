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
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";


const App = () => {
  return (
    <>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a href="/"><img src={logo} height="32px" style={{ marginLeft: "-1.5rem" }} /></a>
          <div class="box">
            <AiOutlineSearch />
            <input type="text" name="" placeholder='search..' />
          </div>
          <div style={{ marginLeft: "5rem",marginTop: "0.5rem", fontSize: "1.3rem", cursor: "pointer" }}><IoIosNotificationsOutline /></div>
          <div style={{ marginTop: "0.5rem", fontSize: "1.3rem", cursor: "pointer" }}><BsPerson /></div>

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
