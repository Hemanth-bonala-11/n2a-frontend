
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../../Assets/images/logo.png'
import { useEffect, useState } from 'react'
import Modal from '../Modal';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import { Auth } from '../Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { actionsCreator } from '../../Redux/actions/actionsCreator';
import { fetchUserDetails } from '../../Api/authApi';

const mapStatetoProps = ({auth})=>({auth})

export const  Navbar = ()=>{
    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false) 
    const {auth} = useSelector(mapStatetoProps);
    const isLoggedIn = localStorage.getItem("auth_token")
    const [openProfile, setOpenProfile] = useState(false);
    const dispatch = useDispatch()
    const setUserDetails = async ()=>{
      try {
        const token = localStorage.getItem('auth_token')
      const res = await fetchUserDetails({"access_token": token})
      dispatch(actionsCreator.SET_USER_DETAILS(res.data.user_details)) 
      dispatch(actionsCreator.SET_LOGIN({isLoggedIn: true}))
        
      } catch (error) {
        
      }
      
    }
    useEffect(()=>{
      try {
        setUserDetails()
      } catch (error) {
        
      }
      
     
    },[])
    
    return (
        <div>
            <Modal show={showLogin}>
                <Login setShowLogin={setShowLogin}/>
            </Modal>
            <Modal show={showSignup}>
                <Signup setShowSignup={setShowSignup} setShowLogin={setShowLogin}/>
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
                       <Link to="/contact-us"  className='nav-link'>Contact Us</Link>
                       <Link to="/course-card"  className='nav-link'>Courses</Link>
                </div>
                {
                isLoggedIn?(
                    <div className="menu-container" >
                <div
                  className="navbar-items"
                  onClick={() => setOpenProfile(!openProfile)}
                >
                  <img src={auth?.userDetails?.profilePicture} alt="" className='profile-pic' />
                  <p className="navbar-login">Hey, {auth?.userDetails?.firstName}!</p>
                </div>
                    {
                        openProfile &&
                    <div className="menu-list">
                    <Link to="/myorders" onClick={() => setOpenProfile(false)}  className='menu-link'>
                      <div className="menu-item">Dashboard</div>
                    </Link>
                      <div className="menu-item">
                        Logout
                      </div>
                  </div>
                    }
                  </div>
                ) :(
                <div className='navbar-auth'>
                    <button className='login-button' onClick={()=>setShowLogin(true)}> Login</button>
                    <button className='signup-button' onClick={()=>setShowSignup(true)}>Sign up</button>
                </div>
                )
                }

            </div>
        </div>
    )
}