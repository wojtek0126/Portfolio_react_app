import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import {loginCheckForMenuView, logOut} from '../../functionsStorage/functions';
import { getLoggedBool } from '../../../API/fetch';

//prop loggedIn is taken from components: login, signup, logout, homeheader, steps(all) - from where menu is
const HomeHeaderMenu = ({homeOrLogin, loggedIn}) => {  
    let [logged, setLogged] = useState([]);
    useEffect(() => {
        getLoggedBool(setLogged);  
        // temp.push(logged);
    
    }, [])
   console.log(logged, "logged state homhederMenu");

    let userName = localStorage.getItem("loginName");
   
    localStorage.setItem("NextStep", 1);     

    if (homeOrLogin === "home" && loggedIn === true || loggedIn === "true" ) {
        return (
            <>
            <div className="login-menu-container">
                 <div className="login-menu__top">
                 <p className="login-menu__welcome">Witaj, {userName}</p>
                        <Link2 to="/steps">
                            <button className="btn menu-top-button" href="">Oddaj rzeczy</button>
                        </Link2> 
                        <Link2 to="/wylogowano">
                            <button onClick={logOut(logged, `loggedIn`)} className="btn menu-top-button" href="">Wyloguj</button>
                        </Link2>                   
                    </div>  
                <div className="login-menu__bottom ">
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
                </div>
                </div>
            </>
        )
    }
    else if (homeOrLogin === "home" && loggedIn === false || loggedIn === "false" || loggedIn === "") {
        return (
            <>
             <div className="login-menu-container">
               <div className="login-menu__top">
                        <Link2 to="/login">
                            <button className="btn menu-top-button" href="">Zaloguj</button>
                        </Link2> 
                        <Link2 to="/signUp">
                            <button className="btn menu-top-button" href="">Załóż konto</button>
                        </Link2>                   
                    </div>  
                <div className="login-menu__bottom ">
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
                </div>
              </div>           
            </>
        )
    }
    else if (homeOrLogin !== "home" && loggedIn === true || loggedIn === "true" ) {
        return (
            <>
                <div className="login-menu-container">
                 <div className="login-menu__top">
                 <p className="login-menu__welcome">Witaj, {userName}</p>
                        <Link2 to="/steps">
                            <button className="btn menu-top-button" href="">Oddaj rzeczy</button>
                        </Link2> 
                        <Link2 to="/wylogowano">
                            <button onClick={logOut(logged, `loggedIn`)} className="btn menu-top-button" href="">Wyloguj</button>
                        </Link2>                   
                    </div>  
                <div className="login-menu__bottom ">
                <NavHashLink to="" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">Start</button>
                        </NavHashLink>              
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
                </div>
                </div>
            </>
        )
    }
    else if (homeOrLogin !== "home" && loggedIn === false || loggedIn === "false" || loggedIn === "") {
        return (
            <>
    <div className="login-menu-container">
                 <div className="login-menu__top">
                        <Link2 to="/login">
                            <button className="btn menu-top-button" href="">Zaloguj się</button>
                        </Link2> 
                        <Link2 to="/signUp">
                            <button className="btn menu-top-button" href="">Załóż konto</button>
                        </Link2>                   
                    </div>  
                <div className="login-menu__bottom ">
                <NavHashLink to="" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">Start</button>
                        </NavHashLink>              
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
                </div>
                </div>
            </>
        )
    } 
}

export default HomeHeaderMenu;