import './NotEveryAnimal.css'
import greenBg from '../../../assets/green-backdrop.svg'; 

function NotEveryAnimal() {
    return (
        <>
            <div id="not-every-animal">
                <img src={greenBg} alt="green-bg" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                <div className="overlayText">
                    <h1 className="headerTwo">Not every animal needs to be rescued</h1>
                    <p className="bodyText">Intervening too quickly can cause more harm than good. Our goal is to help you recognize
                        when an animal truly needs help - and when leaving it alone is the best choice.</p>  
                </div>
            </div>
        </>
    ); 
}

export default NotEveryAnimal;