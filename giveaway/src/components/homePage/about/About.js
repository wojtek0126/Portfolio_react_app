import React from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import Signature from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Signature.svg';
import People from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/People.jpg';

const About = () => {
    return (
        <div className="about-container" id="aboutUs">
            <div className="about-left-side">
                <p>O nas</p>
                <img src={Decoration} alt="decor" className="about-left-side__decoration" />
                <p className="about-left-side__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. 
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={Signature} alt="signature" className="about-left-side__signature" />
            </div>         
            <img src={People} className="about-right-side__img" alt="about-right-img" />            
        </div>
    )
}

export default About;
