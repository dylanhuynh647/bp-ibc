import './WildlifeGuide.css' 

function WildlifeGuide () {
    console.log("wildlife section");
    return (
        <section id="WildlifeGuidance"
            style={{
                padding:'2em 4em',
                fontFamily: 'DM Sans, sans-serif'}}>
            <h1 id="WildlifeGuidanceTitle">Wildlife Guidance</h1>
            <p className="subtext">If you've found a wild animal, it's important to pause before taking action. 
                                    Many animals that appear abandoned or injured are behaving normally. 
                                    This page will help you decide what to do - safely and responsibly.</p>
        </section>
    );
}

export default WildlifeGuide;