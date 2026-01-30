import './homepageSection.css';
import { useNavigate } from 'react-router-dom';

function FoundAnimalSection(){
    const navigate = useNavigate();

    return (
        <section id="found-animal">
            <div className="homepage-green">
                <div id="text-section">
                    <h1>Found a wild animal?</h1>
                    <h4>Before helping, learn what to do- and what NOT <br></br>
                        to do - to keep wildlife safe.
                    </h4>
                    <button onClick={() => navigate('/education')} id="main-button">
                        Learn What To Do First
                    </button>
                    <div id="link-white">
                        <a href="/volunteer">I want to help in other ways</a>
                        <img src="src/assets/white-arrow-thin.svg" alt="arrow-right"/>
                    </div>
                </div>
                <div id="main-image">
                    <img src="src/assets/baby-animal.jpg" alt="image of baby animal"/>
                </div>
            </div>
        </section>
    );
}

export default FoundAnimalSection;

