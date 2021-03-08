import React from 'react';
import AppMenu from '../../appMenu/AppMenu';
import DecorBigWithTxtBig from '../../molecules/DecorBigWithTxtBig';
import FourRhombs from './FourRhombs';
import SweaterImage from './SweaterImage';

const StepsTopPart = ({homeOrLogin, loggedIn}) => {

    return (
        <div className="steps-top">
      <SweaterImage />
        <div className="steps-top-right">
        <div className="login-menu-container" >         
      <AppMenu homeOrLogin={homeOrLogin} loggedIn={loggedIn}/>   
          </div>   
            <div className="steps-top-right__content">             
               <DecorBigWithTxtBig textTop={`Oddaj rzeczy, których już nie chcesz`} textBottom={`POTRZEBUJĄCYM`} />
                <span>Wystarczą 4 proste kroki:</span>
              <FourRhombs />
            </div>
        </div>
    </div>
    )
}

export default StepsTopPart;