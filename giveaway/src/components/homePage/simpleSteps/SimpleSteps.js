import React from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import Icon1 from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Icon-1.svg';
import Icon2 from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Icon-2.svg';
import Icon3 from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Icon-3.svg';
import Icon4 from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Icon-4.svg';
import {Link} from 'react-router-dom';

const SimpleSteps = () => {
    return (
        <div className="simple-steps-container" id="simpleSteps">
            <div className="simple-steps-top">
                <p className="simple-steps-top--text">Wystarczą 4 proste kroki</p>
                <img src={Decoration} alt="decor" className="simple-steps-top--decoration" />
            </div>
            <div className="simple-steps-middle">
                <div className="simple-steps-middle__align">
                    <img src={Icon1} alt="ic1" className="simple-steps-middle--decoration" />
                    <p className="simple-steps-middle__underlined">Wybierz rzeczy</p>
                    <div className="simple-steps-middle__underlined--underline"></div>
                    <p className="simple-steps-middle__bottom-text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="simple-steps-middle__align">
                    <img src={Icon2} alt="ic2" className="simple-steps-middle--decoration" />
                    <p className="simple-steps-middle__underlined">Spakuj je</p>
                    <div className="simple-steps-middle__underlined--underline"></div>
                    <p className="simple-steps-middle__bottom-text">skorzystaj z worków na śmieci</p>
                </div>
                <div className="simple-steps-middle__align">
                    <img src={Icon3} alt="ic3" className="simple-steps-middle--decoration" />
                    <p className="simple-steps-middle__underlined">Zdecyduj komu chcesz pomóc</p>
                    <div className="simple-steps-middle__underlined--underline"></div>
                    <p className="simple-steps-middle__bottom-text">wybierz zaufane miejsce</p>
                </div>
                <div className="simple-steps-middle__align">
                    <img src={Icon4} alt="ic4" className="simple-steps-middle--decoration" />
                    <p className="simple-steps-middle__underlined">Zamów kuriera</p>
                    <div className="simple-steps-middle__underlined--underline"></div>
                    <p className="simple-steps-middle__bottom-text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="simple-steps-bottom">
                <Link to="/login">
                    <button className="btn header-button">oddaj rzeczy</button>
                </Link>
             
            </div>
            
        </div>
    )
}

export default SimpleSteps;
