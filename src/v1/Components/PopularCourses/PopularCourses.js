
import './PopularCourses.scss'
import { useEffect, useState } from 'react'
import { CategoryCard } from '../Courses/CategoryCard'
import CourseCard from '../CourseCard'

export const PopularCourses = ()=>{
    const [courseCategories, setCourseCategories] = useState([])
    useEffect(()=>{
        setCourseCategories([{
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
    },[])
    return (
        <div>
        <div className='featured-courses-wrapper'>
            
            <div className='featured-courses-headings'>
                <div className='featured-courses-heading'>Explore Programs</div>
                <div className='featured-courses-subheading'>Our Most Popular Class</div>
                <div className='featured-courses-supporting-text'>Let's join our famous class, the knowledge provided will definitely be useful for you.</div>
            </div>
            </div>
            <div className='course-cards'>
                {
                    courseCategories.length!==0 && courseCategories.slice(0,3).map((category, index)=>{
                        return (<CourseCard/>)
                    })
                }
                </div>

        </div>
    )
}