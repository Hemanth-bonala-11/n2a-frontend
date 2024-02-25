import CourseInformation from '../CreateCourseForms/CourseInformation'
import './CreateCourse.scss'

export const CreateCourse = ()=>{

    return (
        <div>
            <div className='create-course'>

            
            <div className='create-course-heading'>Create Course</div>
            <div className="create-course-wrapper">
                
            <CourseInformation/>
            </div>
            </div>
        </div>
    )
}