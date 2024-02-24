import { NavLink, Navigate, Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { useContext, useEffect, useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import {RxDashboard} from 'react-icons/rx';
import {CgProfile} from 'react-icons/cg';
import {FiEdit} from 'react-icons/fi';
import {HiOutlineLogout} from 'react-icons/hi';
import {FaBook} from 'react-icons/fa';



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
  





  return (
    // <div className="main">
      

      
    //   <div className="sidebar" id="sidebar">
    //     <div className="title">
    //       N<sub>2</sub>A
    //     </div>
    //     <div className="options">
    //       <a href="/studentdashboard">
    //         <span className="icon">📚</span> All Courses
    //       </a>
    //       <a href="/studentdashboard">
    //         <span className="icon">🏠</span> Dashboard
    //       </a>
    //       <a href="/studentdashboard">
    //         <span className="icon">👤</span> Profile
    //       </a>
    //       <a href="/studentdashboard">
    //         <span className="icon">🔒</span> Enrolled Courses
    //       </a>
    //       <a href="/studentdashboard">
    //         <span className="icon">🚪</span> Logout
    //       </a>
    //     </div>
    //   </div>
    //   <div className="dashboard-button" >
    //     {/* <span className="icon" onClick={toggleSidebar}>
    //       ☰
    //     </span> */}
    //   </div>
      
    //   <div>
    //     Student Dashboard
    //   </div>
    //   {/* <div className="content" id="content">
    //     <div className="cards">1</div>
    //     <div className="cards">2</div>
    //     <div className="cards">3</div>
    //     <div className="cards">4</div>
    //     <div className="cards">5</div>
    //     <div className="cards">6</div>
    //     <div className="cards">7</div>
    //     <div className="cards">8</div>
    //     <div className="cards">9</div>
    //     <div className="cards">10</div>
    //     <div className="cards">11</div>
    //     <div className="cards">12</div>
    //     <div className="cards">13</div>
    //     <div className="cards">14</div>
    //     <div className="cards">15</div>
    //     <div className="cards">16</div>
    //   </div> */}
    // </div>
    <div>
    {/* <lable for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>

    </lable> */}
    <div className="sidebar"> 
        <header> N2A</header>
        <ul>
            <li className="options-parent"><a href="#"><div className="options"><div><RxDashboard/></div><div> Dashboard</div></div></a></li>
            
            <li className="options-parent"><a href="#"><div className="options"><div><FaBook/> </div><div>Enrolled Courses</div></div></a></li>
            <li className="options-parent"><a href="#"><div className="options"><div><AiOutlinePlus/></div> <div>All Courses</div></div></a></li>
            {/* <li className="options-parent"><a href="#"><div className="options"><div><FiEdit/> </div><div>Edit Course</div></div></a></li> */}
            <li className="options-parent"><NavLink to="student/profile" ><div className="options"><div><CgProfile/> </div><div>User Profile</div></div></NavLink></li>
            <li className="options-parent"><div className="options" id="logout"><div><HiOutlineLogout/></div> <div>Log Out</div></div></li>
           
        </ul>
    </div>
    
    
    
       
    </div>
  );
}

export default Sidebar;