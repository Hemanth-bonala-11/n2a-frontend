import { useEffect, useState } from 'react'
import './Courses.scss'
import { CategoryCard } from './CategoryCard'
export const Courses = ()=>{
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
            <div className="courses-wrapper">
                <div className="home-course-catergories-text">
                <div className="courses-categories-heading">Our Categories</div>
                <div className="courses-categories-subheading">Fostering a playful & engaging learning environment</div>
                </div>
                <div className='category-cards'>

                
                {
                    courseCategories.length!==0 && courseCategories.slice(0,3).map((category, index)=>{
                        return (<CategoryCard category= {category} key={index}/>)
                    })
                }
                </div>

            </div>
        </div>
    )
}