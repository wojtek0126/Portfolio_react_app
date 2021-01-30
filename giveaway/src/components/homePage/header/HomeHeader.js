import React from 'react';
import header from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/header.jpg';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import {Link} from 'react-router-dom';
import HomeHeaderMenu from "C:/CodersLab/Portfolio_react_app/giveaway/src/components/atoms/commonRenders/HomeHeaderMenu.js";

const HomeHeader = () => {   
    // const headSection = document.getElementById();
    return (  
        <div className="header-container">
        <img src={header} className="header-left-side" alt="header-left-img" />
        <div className="header-right-side">
            <div className="header-right-side--menu">
                <div className="header-right-side--menu__top">
                    <Link to="/login">
                    <button className="btn menu-top-button" href="">Zaloguj</button>
                    </Link> 
                    <Link to="/signUp">
                         <button className="btn menu-top-button" href="">Załóż konto</button>
                    </Link>                   
                </div>                    
                <div className="header-right-side--menu__bottom">
                    <HomeHeaderMenu homeOrLogin={"home"} />
                </div>
            </div>
            <div className="header-right-side--content">
                <div className="header-right-side--content__text">
                    <h2>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h2>                    
                    <img src={Decoration} alt="decor" className="header-right-side--content__decoration" />
                    </div>
                <div className="header-right-side--content__buttons">
                    <Link to="/login">
                        <button className="btn header-button" href="">oddaj rzeczy</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn header-button" href="">zorganizuj zbiórkę</button>
                    </Link>              
                </div>
            </div>
            </div>
        </div>        
    )
}

export default HomeHeader;
