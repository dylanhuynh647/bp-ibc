<<<<<<< HEAD
import Footer from '../components/site/Footer'; 
import './VolunteerPage.css'; 
import exclamationMark from '../assets/exclamation-mark.svg';
import whiteArrow from '../assets/white-arrow.svg'; 
import greenBg from '../assets/green-backdrop.svg'; 

=======
import Navbar from '../components/site/Navbar'
import Footer from '../components/site/Footer'
>>>>>>> main

function VolunteerPage() {

    const navPage = () => {
        window.location.reload();
    }

    return (
        <>
<<<<<<< HEAD
            <div id="info-sec" style={{backgroundColor: "#f5edea", height: "400px", margin: "0"}}>
                <div id="info-text-container">
                    <h1 className="headerOne" style={{color: "#324436"}}>Volunteer With Us</h1>
                    <p className="bodyText" style={{color: "#324436", width: "1000px"}}>Volunteering with Itty Bitty Critters means supporting wildlife through education, care, and community 
                    awareness. We are grateful for people who want to help — and we value patience, responsibility, and respect for wildlife.</p>  
                </div>
            </div>

            <div id="volun-looks-like" style={{height: "350px", width:"100%"}}>
                <img src={greenBg} alt="green-bg" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                <div className="overlayText">
                    <h1 className="headerTwo" style={{color: "white", width: "950px", marginBottom: "20px"}}>What Volunteering Looks Like</h1>
                    <p className="bodyText" style={{color: "#DCDACD", width: "1000px"}}>Volunteers do not handle wildlife directly. Instead, they support our work through educa-
                    tion, organization, and community outreach.</p>  
                </div>
            </div>

            <div id="get-involved" style={{width: "100%", height: "600px"}}>
                <img src={greenBg} alt="green-bg" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                <div className="overlayText" style={{left: "50%"}}>
                    <h1 className="headerTwo" style={{color: "white", width: "950px", marginBottom: "60px"}}>Get Involved</h1>

                    <div id="volunteer-container">
                        <div id="volunteer-info">
                            <img src={exclamationMark} alt="exclamation-mark" style={{width: "60px", height: "60px", marginTop: "35px"}}/>
                            <p className="bodyText" id="volunteer-text" style={{color: "#DCDACD", width: "350px"}}>Volunteering with Itty Bitty Critters is not hands-on animal rescue. Our focus is education, prevention, and promoting 
                            responsible wildlife interaction within the community.</p>
                        </div>
                        <div id="volunteer-contact">
                            <p className="bodyText" style={{height: "170px", width: "400px", marginBottom: "20px", color: "#324436"}}>If you're interested in volunteering, we would love to hear from you. Please reach out with a brief introduction and let us know how you would like to help.</p>
                            <button className="cardTitleText" id="contact-btn" onClick={navPage}>
                                Contact Us for Volunteer Inquiries
                                <img src={whiteArrow} alt="white-arrow" style={{width: "13px", height: "13px", marginLeft: "15px"}}/>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
=======
            <Navbar/> 
            <h1>Welcome to the Volunteer Page</h1>
            <p>This is the main content area.</p>
>>>>>>> main
            <Footer/>
        </>
    )
}

export default VolunteerPage