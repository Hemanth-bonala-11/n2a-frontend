import { useEffect, useState } from "react"
import { AboutusBanner } from "../../Components/AboutusBanner/AboutusBanner";
import image1 from '../../../Assets/images/about-us-banner-image-1.png';
import image2 from '../../../Assets/images/about-us-banner-image-2.png';

export const AboutUs = ()=>{
    const [aboutUsData, setAboutUsData] = useState([])
    useEffect(()=>{
        setAboutUsData([
            {
                imageUrl: image1,
                description: "Neophyte2Adept, is a UI/UX Design Academy in Delhi involved in User Experience and User Interface Training and Consulting. It was started in 2023 and passionate towards User Interface Design/ User Experience Design, Human Computer Interaction Design. Humanoid is gushing towards competence to acquire knowledge and have a wide understanding towards the sphere through the foremost courses in the area of UI/UX Design, by strengthening up your skills, for your golden future",
                heading: "Neophyte2Adept providing the best opportunities to the students around the glob."
            },
            {
                imageUrl: image2,
                description: "Neophyte2Adept, is a UI/UX Design Academy in Delhi involved in User Experience and User Interface Training and Consulting. It was started in 2023 and passionate towards User Interface Design/ User Experience Design, Human Computer Interaction Design. Humanoid is gushing towards competence to acquire knowledge and have a wide understanding towards the sphere through the foremost courses in the area of UI/UX Design, by strengthening up your skills, for your golden future",
                heading: "Neophyte2Adept  providing the best opportunities to the students around the glob."
            },
        ])
    },[])
    return (
        <div className="aboutus-wrapper">
            <AboutusBanner heading={aboutUsData[0]?.heading} description={aboutUsData[0]?.description} imageUrl={aboutUsData[0]?.imageUrl} side="left"/>
            <AboutusBanner heading={aboutUsData[1]?.heading} description={aboutUsData[1]?.description} imageUrl={aboutUsData[1]?.imageUrl} side="right"/>
        </div>
    )
}