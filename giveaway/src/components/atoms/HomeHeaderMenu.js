import React from 'react';
import {Link} from 'react-scroll';

const HomeHeaderMenu = () => {  

    return (
        <>
        <button className="btn menu-bottom-button" href="">Start</button>
                    <Link to="simpleSteps" smooth={true} duration={1000}>
                        <button className="btn menu-bottom-button" href="">O co chodzi?</button>
                    </Link>    
                    <Link to="aboutUs" smooth={true} duration={1000}>
                        <button className="btn menu-bottom-button" href="">O nas</button>
                    </Link>              
                    <Link to="whoWeHelp" smooth={true} duration={1000}>
                        <button className="btn menu-bottom-button" href="">Fundacja i organizacje</button>
                    </Link> 
                    <Link to="contact" smooth={true} duration={1000}>
                        <button className="btn menu-bottom-button" href="">Kontakt</button>
                    </Link>         
        </>
    )
}

export default HomeHeaderMenu;