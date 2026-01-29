import './homepageSection.css';
function HelpSection(){
    return (
        <section id="help-section">
            <div>
                <h2>How Itty Bitty Critter Helps</h2>
                <div>
                    <div className="card-content">
                        <div className="icons">
                            <img src="src/assets/green-leaf.svg" alt="green-leaf"/>
                        </div>
                        <h3 className="card-title">Wildlife Education</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nunc nisl eget nunc.</p>
                    </div>
                    <div className="card-content">
                        <div className="icons">
                            <img src="src/assets/blue-paw.svg" alt="blue-paw"/>
                        </div>
                        <h3 className="card-title">Guidance & Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nunc nisl eget nunc.</p>
                    </div>
                    <div className="card-content">
                        <div className="icons">
                            <img src="src/assets/left-hearthands.svg" alt="left-hearthands"/>
                            <img src="src/assets/right-hearthands.svg" alt="right-hearthands"/>
                        </div>
                        <h3 className="card-title">Community Awareness</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nunc nisl eget nunc.</p>
                    </div>
                </div>
                <div>
                    <h2>How You Can Help</h2>
                    <button>Learn About Wildlife</button>
                    <button>Volunteer With Us</button>
                    <button>Follow Our Updates</button>
                </div>
            </div>

        </section>);
}
export default HelpSection;