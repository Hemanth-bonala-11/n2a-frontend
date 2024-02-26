import './CourseCard.scss'
import image from '../../../Assets/images/banner-front-image.png'

export const CourseCard = ({Course})=>{
    return (
            <div id="card">
      <img src={image} alt="" id="cardimage" />
      <div id="cardcontent">
        <div style={{ fontWeight: 'lighter' }}>Design</div>
        <div id="coursename">
          <div className='course-title'>{Course?.courseName}</div>
          <img src="spotifyBackground.jpg" alt="" />
        </div>
        <div className='course-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, adipisci!</div>
        <div id="coursesub">
          <div id="numrate">4.3 ★★★★☆ (16,325)</div>
          <div id="strrating"></div>
          <div id="subscriptions"></div>
        </div>
        <div id="Userdetails">
          <div id="u1">
            <img src={image} alt="" id="propho" />
            <div>
              <div id="username" className='author-price'>Jane Cooper</div>
              <div id="enrolledyear" className='author-price'>2001 Enrolled</div>
            </div>
          </div>
          <div id="coursefee">$17.84 </div>
        </div>
      </div>
    </div>
    )
}