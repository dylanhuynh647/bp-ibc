import Navbar from '../components/site/Navbar'
import Footer from '../components/site/Footer'
import WildlifeGuide from '../components/pagesections/WildlifeGuide'
import NotEveryAnimal from '../components/site/education_page/NotEveryAnimal'
import EducationQuestions from '../components/site/EducationQuestions'

function EducationPage() {
    return (
        <>
            <Navbar/> 
            <WildlifeGuide/>
            <NotEveryAnimal />
            <EducationQuestions/>
            <Footer/> 
        </>
    )
}

export default EducationPage