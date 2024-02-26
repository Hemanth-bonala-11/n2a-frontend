import { useEffect } from "react"
import Banner from "../../Components/Banner"
import Courses from "../../Components/Courses"
import { Footer } from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar"
import { PopularCourses } from "../../Components/PopularCourses/PopularCourses"

export const Home = ()=>{
    
    return(
        <div>
            <Navbar/>
            <Banner/>
            <Courses/>
            <PopularCourses/>
            <Footer/>
        </div>
    )
}