import { useEffect, useState } from 'react'
import './YourCourses.scss'

import { getToken } from '../../../Utils/generalUtils';
import { fetchInstructorCourses } from '../../../Api/courseApi';
import { toast } from 'react-toastify';
import { InstructorCourseCard } from '../InstructorCourseCard/InstructorCourseCard';
export const YourCourses = ()=>{
    const [courses, setCourses] = useState([]);
    const token = getToken()

    useEffect(()=>{
        const payload = {
            "access_token": token
        }
        fetchInstructorCourses(payload).then((res)=>{
            setCourses(res.data.courses)
        }).catch((err)=>{
            toast.error("error while fetching courses")
        })
    },[])
    return (
        <div className="your-courses-wrapper">
 
            {
                courses?.map((course)=>(
                    <InstructorCourseCard Course={course}/>
                ))
            }
            

            

        </div>
    )
}