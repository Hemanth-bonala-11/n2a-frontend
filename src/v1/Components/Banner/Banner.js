import './Banner.scss'
import BannerFrontImage from '../../../Assets/images/banner-front-image.jpg'

export const Banner = ()=>{
    return (
        <div>
            <div className='banner-wrapper'>
                <div className='banner-information'>
                    <div className='black-heading'>Up Your <span className='green-heading'>Skills</span></div>
                    <div className='black-heading'>To <span className='green-heading'>Advance</span> Your</div>
                    <div className='green-heading'>Career <span className='black-heading'>Path</span></div>
                    <div className='banner-description'>Learn UI-UX Design skills with weekend UX . The latest online learning system and material that help your knowledge growing.</div>
                    <div className='banner-get-started'>
                        <button className='signup-button'>Get Started</button>
                    </div>

                </div>
                <div className='banner-image'>
                    <img src={BannerFrontImage} className='banner-front-image'/>
                </div>
            </div>

        </div>
    )
}