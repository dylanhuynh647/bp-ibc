import Navbar from '../components/site/Navbar'
import Footer from '../components/site/Footer'
import WildlifeGuide from '../components/pagesections/WildlifeGuide'
import EducationQuestions from '../components/site/EducationQuestions'

function EducationPage() {
    return (
        <>
            <Navbar/> 
            <h1>Welcome to the Education Page</h1>
            <p>This is the main content area.</p>
            <WildlifeGuide/>
            <EducationQuestions/>
            <Footer/> 
        </>
    )
}

export default EducationPage