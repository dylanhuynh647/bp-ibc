import Navbar from '../components/site/Navbar'
import Footer from '../components/site/Footer'
import VolunteerInfo from '../components/site/VolunteerInfo'; 
import VolunteerHelp from '../components/site/VolunteerHelp'
import VolunteerLooksLike from '../components/site/VolunteerLooksLike'; 
import VolunteerGetInvolved from '../components/site/VolunteerGetInvolved'; 

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