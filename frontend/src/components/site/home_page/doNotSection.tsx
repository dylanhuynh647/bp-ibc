import './homepageSection.css';
function DoNotSection(){
    return (  
        <section id="do-not-feed">
            <div>
                <div>
                    <img src="src/assets/images/no-sign.svg" alt="no-sign"/>
                </div>
                <div>
                    <h2>Please Do Not Feed or Move Wildlife</h2>
                    <ul>
                        <li>Not every baby animal is abandoned.</li>
                        <li>Feeding or handling can cause serious harm.</li>
                        <li>Moving animals can separate them from their parents.</li>
                    </ul>
                    <a href="EducationPage.tsx">Learn if the animal needs help</a>
                </div>
            </div>
        </section>
    );
}
export default DoNotSection;