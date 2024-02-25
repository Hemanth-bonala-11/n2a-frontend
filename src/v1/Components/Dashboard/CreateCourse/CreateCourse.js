import { useEffect, useState } from 'react'
import CourseInformation from '../CreateCourseForms/CourseInformation'
import './CreateCourse.scss'
import Loading from '../../Loading';
import { CourseVideosUpload } from '../CreateCourseForms/CourseVideosUpload';

export const CreateCourse = ()=>{
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{

    },[])

    return (
        loading ? (<Loading/>):(
        <div>
            <div className='create-course'>

            
            <div className='create-course-heading'>Create Course</div>
            <div className="create-course-wrapper">
            {
                page === 1 && <CourseInformation setLoading={setLoading} setPage={setPage}/>
            }
            {
                page === 2 && <CourseVideosUpload/>
            }
            
            </div>
            </div>
        </div>
        )
    )
}