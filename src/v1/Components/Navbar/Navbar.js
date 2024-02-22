
import { Link } from 'react-router-dom'
import './Navbar.scss'
export const  Navbar = ()=>{
    return (
        <div>
            
            <div className='navbar-wrapper'>
                <div>
                <a href='/' className='logo'>
                    <img src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600'/>
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
                    <button className='login-button'> Login</button>
                    <button className='signup-button'>Sign up</button>
                </div>

            </div>
        </div>
    )
}