import './homepageSection.css';
function DoNotSection(){
    return (  
        <section>
            <div className="homepage-white">
                <div id="do-not-card">
                    <div id="do-not-header">
                        <img src="src/assets/prohibit-sign.svg" alt="no-sign"/>
                        <h3>Please Do Not Feed or Move Wildlife</h3>
                    </div>
                    <div id="text-section">
                        <ul>
                            <li>Not every baby animal is abandoned.</li>
                            <li>Feeding or handling can cause serious harm.</li>
                            <li>Moving animals can separate them from their parents.</li>
                        </ul>
                        <div id="link-green">
                            <a href="/education">Learn if the animal needs help</a>
                            <img src="src/assets/green-arrow-thin.svg" alt="arrow-right"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default DoNotSection;