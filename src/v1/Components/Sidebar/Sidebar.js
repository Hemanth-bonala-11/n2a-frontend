import { Link, NavLink, Navigate, Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { useContext, useEffect, useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import {RxDashboard} from 'react-icons/rx';
import {CgProfile} from 'react-icons/cg';
import {FiEdit} from 'react-icons/fi';
import {HiOutlineLogout} from 'react-icons/hi';
import {FaBook} from 'react-icons/fa';
import logo from '../../../Assets/images/logo.png'
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";



function Sidebar() {
  const [navWidth, setNavWidth] = useState("0");
  const [dashboardMargin, setDashboardMargin] = useState("0");
  const [login,setLogin]=useState(false)
  // const {login,setLogin}=useContext(AuthContext);
  const location=useLocation();
  const data=location.state;
  const navigate=useNavigate();


  
  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("sidebar-active");
   
  }
  const logout = ()=>{
    localStorage.removeItem('auth_token')
    navigate('/')
    window.location.reload()
    toast.success("logged out successfully")
  }
  

  return (
   
    <div>
    <div className="sidebar"> 
        <header><Link to="/"> <img src={logo} className="sidebar-header"/> </Link></header>
        <ul>
            
            
            <li className="options-parent"><NavLink to="create-course"><div className="options"><div><MdFormatListBulletedAdd /> </div><div>Enrolled Courses</div></div></NavLink></li>
            <li className="options-parent"><NavLink to="/courses"><div className="options"><div><FaBookOpen /></div> <div>All Courses</div></div></NavLink></li>
           
            <li className="options-parent"><NavLink to="profile" ><div className="options"><div><FaUserCircle /> </div><div>User Profile</div></div></NavLink></li>
            <li className="options-parent"><div className="options" id="logout"><div><AiOutlineLogout /></div> <div>Log Out</div></div></li>

            {/* //teacher */}
            <li className="options-parent"><NavLink to="create-course"><div className="options"><div><MdFormatListBulletedAdd /> </div><div>Add Courses</div></div></NavLink></li>
            <li className="options-parent"><NavLink to="/courses"><div className="options"><div><FaBookOpen /></div> <div>Your Courses</div></div></NavLink></li>
           
            <li className="options-parent"><NavLink to="profile" ><div className="options"><div><FaUserCircle /> </div><div>User Profile</div></div></NavLink></li>
            <li className="options-parent"><div className="options" id="logout"><div><AiOutlineLogout /></div> <div>Log Out</div></div></li>

           
        </ul>
    </div>
    
    
    
       
    </div>
  );
}

export default Sidebar;