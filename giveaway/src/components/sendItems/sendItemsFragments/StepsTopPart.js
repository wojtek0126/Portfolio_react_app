import React from 'react';
import HomeHeaderMenu from '../../atoms/commonRenders/HomeHeaderMenu';
import Decoration from '../../../assets/icons/Decoration.svg';
import Sweater from '../../../assets/images/sweater.jpg';
import Rhomb from '../Rhomb.js';


const StepsTopPart = ({homeOrLogin, loggedIn}) => {

    return (
        <div className="steps-top">
        <div className="steps-top-left">
        <img src={Sweater} className="steps-left-side--img" alt="steps-top-left-img" />
        </div>
        <div className="steps-top-right">
        <div className="login-menu-container" >         
      <HomeHeaderMenu homeOrLogin={homeOrLogin} loggedIn={loggedIn}/>   
          </div>   
            <div className="steps-top-right__content">
                <p>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</p>                        
                <img src={Decoration} alt="decor" className="steps-right-side--content__decoration" />
                <span>Wystarczą 4 proste kroki:</span>
                <div className="steps-right-side--content__rhombs">
                    <Rhomb number={1} textRhomb={"Wybierz rzeczy"} />
                    <Rhomb number={2} textRhomb={"Spakuj je w worki"}/>
                    <Rhomb number={3} textRhomb={"Wybierz fundację"} />
                    <Rhomb number={4} textRhomb={"Zamów kuriera"} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default StepsTopPart;