import Banner from "../../Components/Banner"
import Courses from "../../Components/Courses"
import { PopularCourses } from "../../Components/PopularCourses/PopularCourses"

export const Home = ()=>{
    return(
        <div>
            <Banner/>
            <Courses/>
            <PopularCourses/>
        </div>
    )
}