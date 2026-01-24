import Navbar from '../components/site/Navbar'
import Footer from '../components/site/Footer'
import AboutIBCSection from '../components/site/AboutIBCSection'
import MissionSection from '../components/site/MissionSection'
import EducationSection from '../components/site/EducationSection'

function AboutPage() {
    return (
        <>
            <Navbar/>
            <AboutIBCSection/>
            <MissionSection/>
            <EducationSection/>
            <Footer/>
        </>
    )
}

export default AboutPage