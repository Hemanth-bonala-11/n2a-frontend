import logo from './logo.svg';
import './App.css';
import Navbar from './v1/Components/Navbar';
import Banner from './v1/Components/Banner';
import Courses from './v1/Components/Courses';
import {PopularCourses} from './v1/Components/PopularCourses/PopularCourses';
import {Footer} from './v1/Components/Footer/Footer';
import { AboutUs } from './v1/Pages/AboutUs/AboutUs';
import { Router, Routes, Route } from 'react-router';
import Home from './v1/Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';


import configureStore from './v1/Redux/store';
import ContactUs from './v1/Components/ContactUs';
import CourseCard from './v1/Components/CourseCard';
import Sidebar from './v1/Components/Sidebar';
import { TeacherDashboard } from './v1/Pages/TeacherDashboard/TeacherDashboard';
import { Profile } from './v1/Components/Profile/Profile';
import { CreateCourse } from './v1/Components/Dashboard/CreateCourse/CreateCourse';
import { ContactUsPage } from './v1/Pages/ContactUsPAge/ContactUsPage';
import UserProfile from './v1/Components/UserProfile/UserProfile';

export const { store } = configureStore();
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      <Routes>
     
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUsPage/>}/>
        <Route path='/course-card' element={<Sidebar/>}/>
        <Route path='/teacher' element={<TeacherDashboard/>}>
          <Route path='profile' element={<UserProfile/>}/>
          <Route path='create-course' element={<CreateCourse/>}/>
        </Route>
        
      </Routes>
     
      <ToastContainer/>
     
    </div>
    </Provider>
  );
}

export default App;
