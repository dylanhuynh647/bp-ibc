import HowItHelps from "../components/site/HowItHelps";
import CallToAction from "../components/site/CallToAction";
import Navbar from '../components/site/Navbar'
import Footer from '../components/site/Footer'

function HomePage() {
    return (
        <>
            <Navbar/> 
            <h1>Welcome to the Home Page</h1>
            <p>This is the main content area.</p>
            <HowItHelps/>
            <CallToAction/>
            <Footer/> 
        </>
    )
}

export default HomePage