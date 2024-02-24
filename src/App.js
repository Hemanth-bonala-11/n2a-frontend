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

export const { store } = configureStore();
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
     
    </div>
    </Provider>
  );
}

export default App;
