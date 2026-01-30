import './homepageSection.css';
import { useNavigate } from 'react-router-dom';

function HelpSection(){
    const navigate = useNavigate();
    return (
        <section>
            <div id="help-section">
                <h3>How Itty Bitty Critter Helps</h3>
                <div className="gallery">
                    <div className="card-content">
                        <div className="icons">
                            <img src="src/assets/green-leaf.svg" alt="green-leaf"/>
                        </div>
                        <h3 className="card-title">Wildlife Education</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu</p>
                    </div>
                    <div className="card-content">
                        <div className="icons">
                            <img src="src/assets/blue-paw.svg" alt="blue-paw"/>
                        </div>
                        <h3 className="card-title">Guidance & Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu</p>
                        </div>
                    <div className="card-content">
                        <div className="icons">
                            <img src="src/assets/left-hearthands.svg" alt="left-hearthands"/>
                            <img src="src/assets/right-hearthands.svg" alt="right-hearthands"/>
                        </div>
                        <h3 className="card-title">Community Awareness</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, nisl, sed diam nonummy nibh eu</p>
                    </div>
                </div>
                <h3>How You Can Help</h3>
                <div id="button-section">
                    <button onClick={() => navigate('/education')} id="page-button">
                        Learn About Wildlife
                    </button>
                    <button onClick={() => navigate('/volunteer')} id="page-button">
                        Volunteer With Us
                    </button>
                    <button onClick={() => navigate('/updates')} id="page-button"> {/*Placeholder used*/}
                        Follow Our Updates
                        <img src="src/assets/green-arrow-thin.svg" alt="arrow-right"/>
                    </button>
                </div>
            </div>
        </section>);
}
export default HelpSection;