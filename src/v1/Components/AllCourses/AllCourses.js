import { useEffect, useState } from 'react'
import './AllCourses.scss'
import { fetchAllCourses } from '../../Api/courseApi'
import CourseCard from '../CourseCard'
import Navbar from '../Navbar'
import { Footer } from '../Footer/Footer'

export const AllCourses = ()=>{
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetchAllCourses().then((res)=>{
            setCourses(res.data.courses)
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
    return (
        <div>
            <Navbar/>
            {
                courses?.map((course)=>(
                    <div className="all-courses-wrapper">
                        <CourseCard Course={course}/>

                    </div>

                ))
            
            }
            <Footer/>
         </div>
    )
}