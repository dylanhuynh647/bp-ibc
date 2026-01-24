import Navbar from '../components/site/Navbar'
import Footer from '../components/site/Footer'
import VolunteerHelp from '../components/site/VolunteerHelp'

function VolunteerPage() {
    return (
        <>
            <Navbar/> 
            <h1>Welcome to the Volunteer Page</h1>
            <p>This is the main content area.</p>
            <VolunteerHelp/>
            <Footer/>
        </>
    )
}

export default VolunteerPage