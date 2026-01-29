import './homepageSection.css';

function FoundAnimalSection(){
    return (
        <section id="found-animal">
            <div className="homepage-section">
                <div>
                    <h1>Found a wild animal?</h1>
                    <p>Before helping, learn what to do- and what
                    NOT to do - to keep wildlife safe.
                    </p>
                    <button>Learn What To Do First</button>
                <a href="VolunteerPage.tsx">I want to help in other ways</a>
            </div>
            <div>
                <img src="src/assets/images/baby-animal.jpg" alt="image of baby animal"/>
            </div>
        </div>
        </section>
    );
}

export default FoundAnimalSection;

