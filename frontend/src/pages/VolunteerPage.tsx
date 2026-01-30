import Navbar from '../components/site/Navbar'
import Footer from '../components/site/Footer'
import VolunteerInfo from '../components/site/volunteer_page/VolunteerInfo'; 
import VolunteerHelp from '../components/site/volunteer_page/VolunteerHelp'
import VolunteerLooksLike from '../components/site/volunteer_page/VolunteerLooksLike'; 
import VolunteerGetInvolved from '../components/site/volunteer_page/VolunteerGetInvolved'; 

function VolunteerPage() {


    return (
        <>            
            <Navbar/> 
            <VolunteerInfo/> 
            <VolunteerLooksLike/> 
            <VolunteerHelp/>
            <VolunteerGetInvolved/> 
            <Footer/>
        </>
    )
}

export default VolunteerPage