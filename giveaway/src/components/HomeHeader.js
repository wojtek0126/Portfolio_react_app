import React from 'react';
import header from '../assets/images/header.jpg';
import Decoration from '../assets/icons/Decoration.svg';
import {Link} from 'react-router-dom';

const HomeHeader = () => {   
    return (  
        <div className="header-container">
        <img src={header} className="header-left-side" alt="header-left-img" />
        <div className="header-right-side">
            <div className="header-right-side--menu">
                <div className="header-right-side--menu__top">
                    <Link to="/login">
                    <button className="btn menu-top-button" href="">                          
                                Zaloguj                                        
                    </button>
                    </Link>
                 
                    <button className="btn menu-top-button" href="">Załóż konto</button>
                    </div>                    
                <div className="header-right-side--menu__bottom">
                <button className="btn menu-bottom-button" href="">Start</button>
                <button className="btn menu-bottom-button" href="">O co chodzi?</button>
                <button className="btn menu-bottom-button" href="">O nas</button>
                <button className="btn menu-bottom-button" href="">Fundacja i organizacje</button>
                <button className="btn menu-bottom-button" href="">Kontakt</button>
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
