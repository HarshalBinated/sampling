import React, { useState } from 'react';
import logo from '../images/logo.png';

import {
    FaTh,
    FaBars,
    FaRegChartBar,
    FaRegFileWord,
    FaCreativeCommonsSamplingPlus,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import {AiFillEye, AiFillHome}from "react-icons/ai";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<AiFillHome/>
        },
        {
            path:"/stock",
            name:"Stock",
            icon:<FaRegChartBar/>
        },
        {
            path:"/utilization",
            name:"Utilization",
            icon:<FaCreativeCommonsSamplingPlus/>
        },
        {
            path:"/estimation",
            name:"Estimation",
            icon:<FaRegFileWord/>
        },
        {
            path:"/view",
            name:"View",
            icon:<AiFillEye/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo "></h1>
                   <div style={{marginLeft: isOpen ? "140px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;