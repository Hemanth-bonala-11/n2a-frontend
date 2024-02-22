import logo from './logo.svg';
import './App.css';
import Navbar from './v1/Components/Navbar';
import Banner from './v1/Components/Banner';
import Courses from './v1/Components/Courses';
import {PopularCourses} from './v1/Components/PopularCourses/PopularCourses';
import {Footer} from './v1/Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Courses/>
      <PopularCourses/>
      <Footer/>
    </div>
  );
}

export default App;
