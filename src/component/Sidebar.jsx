import React, { useState } from 'react';
import {
    FaBars,
    FaStackOverflow,
}from "react-icons/fa";
import {AiFillHome}from "react-icons/ai";
import {MdOutlinePriceChange}from "react-icons/md";
import {RiBarChartGroupedFill}from "react-icons/ri";
import {TbReportSearch}from "react-icons/tb";
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
            icon:<RiBarChartGroupedFill/>
        },
        {
            path:"/utilization",
            name:"Utilization",
            icon:<FaStackOverflow/>
        },
        {
            path:"/estimation",
            name:"Estimation",
            icon:<MdOutlinePriceChange/>
        },
        {
            path:"/view",
            name:"View",
            icon:<TbReportSearch/>
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