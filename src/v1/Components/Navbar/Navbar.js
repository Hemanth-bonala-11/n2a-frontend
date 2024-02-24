
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../../Assets/images/logo.png'
import { useState } from 'react'
import Modal from '../Modal';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import { Auth } from '../Auth/Auth';

export const  Navbar = ()=>{
    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false) 
    return (
        <div>
            <Modal show={showLogin}>
                <Login setShowLogin={setShowLogin}/>
            </Modal>
            <Modal show={showSignup}>
                <Signup setShowSignup={setShowSignup} />
            </Modal>
            
            <div className='navbar-wrapper'>
                <div>
                <a href='/' className='logo'>
                    <img src={logo}/>
                </a>
                
                </div>
                <div className='search-courses'>
                    <input type='text' className='search-query' placeholder='want to learn ? search courses'/>
                </div>
                <div className='nav-links'>
                       <Link to="/" className='nav-link'>Home</Link>
                       <Link to="/about-us"  className='nav-link'>About Us</Link>
                       <Link to="/"  className='nav-link'>Contact Us</Link>
                       <Link to="/"  className='nav-link'>Courses</Link>
                </div>
                <div className='navbar-auth'>
                    <button className='login-button' onClick={()=>setShowLogin(true)}> Login</button>
                    <button className='signup-button' onClick={()=>setShowSignup(true)}>Sign up</button>
                </div>

            </div>
        </div>
    )
}