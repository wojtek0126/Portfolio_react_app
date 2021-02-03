import React from 'react';
import header from '../../../assets/images/header.jpg';
import Decoration from '../../../assets/icons/Decoration.svg';
import {Link} from 'react-router-dom';
import HomeHeaderMenu from '../../atoms/commonRenders/HomeHeaderMenu';


const HomeHeader = () => {   
    let loggedIn = localStorage.getItem("loggedIn");    
    let isLoggedIn = false;
    if (loggedIn === "true") {
        isLoggedIn = true;
    }
    else {
        isLoggedIn = false;
    }

    return (  
        <div className="header-container">
        <img src={header} className="header-left-side" alt="header-left-img" />
        <div className="header-right-side">
            <div className="header-right-side--menu">               
              
                    <HomeHeaderMenu homeOrLogin={"home"} loggedIn={isLoggedIn} />
              
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
