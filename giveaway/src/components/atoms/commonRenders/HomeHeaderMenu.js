import React from 'react';
import {Link} from 'react-scroll';
import { NavHashLink } from 'react-router-hash-link';


const HomeHeaderMenu = ({homeOrLogin}) => {  
    if (homeOrLogin === "home") {
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
    else {
        return (
            <>
            <button className="btn menu-bottom-button" href="">Start</button>
                        <NavHashLink to="simpleSteps" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">O co chodzi?</button>
                        </NavHashLink>    
                        <NavHashLink to="aboutUs" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">O nas</button>
                        </NavHashLink>              
                        <NavHashLink to="whoWeHelp" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">Fundacja i organizacje</button>
                        </NavHashLink> 
                        <NavHashLink to="contact" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">Kontakt</button>
                        </NavHashLink>         
            </>
        )
    }  
}

export default HomeHeaderMenu;