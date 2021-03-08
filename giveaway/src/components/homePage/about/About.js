import React from 'react';
import Decoration from '../../atoms/commonIcons/Decoration';
import FacesImage from '../homePageFragments/FacesImage';
import LargeTxtWithDecor from '../homePageFragments/LargeTxtWithDecor';
import SignatureImage from '../homePageFragments/SignatureImage';

const About = () => {
    return (
        <div className="about-container" id="aboutUs">
            <div className="about-left-side container-half">
              <LargeTxtWithDecor text={`O nas`} />
                <p className="about-left-side__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. 
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <SignatureImage />
            </div>         
            <FacesImage />         
        </div>
    )
}

export default About;
