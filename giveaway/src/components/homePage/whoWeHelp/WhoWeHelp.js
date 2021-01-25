import React from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';

const WhoWeHelp = () => {
    return (
        <div className="who-we-help-container" id="whoWeHelp">
            <div className="who-we-help-top">
                <p>Komu pomagamy?</p>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                <div className="who-we-help-top__options">
                    <button className="btn who-we-help--button">Fundacjom</button>
                    <button className="btn who-we-help--button">Organizacjom pozarządowym</button>
                    <button className="btn who-we-help--button">Lokalnym zbiórkom</button>
                </div> 
                <p className="who-we-help-top__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
            </div>
        
        
        </div>
    )
}

export default WhoWeHelp;
