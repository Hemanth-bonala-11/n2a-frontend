import { useEffect, useState } from "react"
import { getToken } from "../../../Utils/generalUtils"
import { fetchEnrolledCourses } from "../../../Api/courseApi"
import { toast } from "react-toastify"
import CourseCard from "../../CourseCard"

export const EnrolledCourses = ()=>{
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        const payload = {
            "access_token": getToken()
        }
        fetchEnrolledCourses(payload).then((res)=>{
            setCourses(res.data.courses)
            setCourses([{
                "logo":"https://img.freepik.com/free-vector/e-learning-education-template-vector-technology-ad-banner_53876-125996.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=ais",
                "name":"Test",
                "description": "description"
            },
            {
                "logo":"https://img.freepik.com/free-vector/e-learning-education-template-vector-technology-ad-banner_53876-125996.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=ais",
                "name":"Test",
                "description": "description"
            },
            {
                "logo":"https://img.freepik.com/free-vector/e-learning-education-template-vector-technology-ad-banner_53876-125996.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=ais",
                "name":"Test",
                "description": "description"
            }
        ])
        }).catch((err)=>{
            toast.error("error while fetching courses")
        })

    },[])
    return (
        <div>
            <div className="enrolled-courses-wrapper">
                <h2 className="enrolled-courses-heading">Enrolled Courses</h2>
                {
                    courses?.map((course)=>{
                        return(
                            <CourseCard Course={course}/>
                        )
                    })
                }

            </div>
        </div>
    )
}