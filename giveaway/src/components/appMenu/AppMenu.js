import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import {logOut} from '../functionsStorage/functions';
import {getLoggedBool} from '../../API/fetch';
import MenuButtonSmall from './MenuButtonSmall';
import MenuButtonLarger from './MenuButtonLarger';
import Burger from './RWD/Burger';


//prop loggedIn is taken from components: login, signup, logout, homeheader, steps(all) - from where menu is
const AppMenu = ({homeOrLogin, loggedIn, containerClass, topClass, bottomClass}) => {  
    let [logged, setLogged] = useState([]);

    useEffect(() => {
        getLoggedBool(setLogged);       
    
    }, [])

    const handleClick = () => {
        const burgerContainer = document.getElementById("hamburger");
        const burger1  = document.getElementById("burger-1");
        const burger2  = document.getElementById("burger-2");
        const menuContainer = document.getElementById("menuContainer");
        const menuTop = document.getElementById("menuTop");
        const menuBottom = document.getElementById("menuBottom");
        burger1.classList.toggle("burger1-clicked");
        burger2.classList.toggle("burger2-clicked"); 
        burger1.classList.toggle("burger1");    
        burger2.classList.toggle("burger2"); 
        burgerContainer.classList.toggle("burger-clicked");  
        menuContainer.classList.toggle("login-menu-container"); 
        menuContainer.classList.toggle("login-menu-container-mobile"); 
        menuTop.classList.toggle("menu-top-mobile"); 
        // menuTop.classList.toggle("menu__top"); 
        menuBottom.classList.toggle("login-menu__bottom");
        menuBottom.classList.toggle("menu-bottom-mobile"); 
    }
    
   console.log(logged, "logged state homhederMenu");

    let userName = localStorage.getItem("loginName");
   
    localStorage.setItem("NextStep", 1);     
   
        return (          
            <div className="login-menu-container" id="menuContainer">  
              <Burger onClick={handleClick} />              
                <div className="login-menu__top" id="menuTop">
                   {(() => {
               if (loggedIn === true || loggedIn === "true" ) {
                  return (
                    <>
                    <p className="login-menu__welcome">Witaj, {userName}</p>
                           <Link2 to="/step1">
                               <MenuButtonSmall text={`Oddaj rzeczy`}/>                            
                           </Link2> 
                           <Link2 to="/logout">
                               <MenuButtonSmall text={`Wyloguj`} onClick={logOut(logged, `loggedIn`)}/>                          
                           </Link2>                   
                    </>
                  )
              }
              else {
                  return (
                      <>
                       <Link2 to="/login">
                       <MenuButtonSmall text={`Zaloguj`}/>  
                         </Link2> 
                       <Link2 to="/signUp">
                       <MenuButtonSmall text={`Załóż konto`}/>  
                        </Link2>  
                        </>
                  )
              }            
            })()}              
            </div>            
                <div className="login-menu__bottom" id="menuBottom">
                {(() => {
              if (homeOrLogin === "home"){
                  return (
                      <>
                            <MenuButtonLarger text={`Start`}/>                            
                        <Link to="simpleSteps" smooth={true} duration={1000}>
                            <MenuButtonLarger text={`O co chodzi?`}/>                            
                        </Link>    
                        <Link to="aboutUs" smooth={true} duration={1000}>
                            <MenuButtonLarger text={`O nas`}/>                           
                        </Link>                                      
                        <Link to="whoWeHelp" smooth={true} duration={1000}>
                            <MenuButtonLarger text={`Fundacja i organizacje`}/>                           
                        </Link> 
                        <Link to="contact" smooth={true} duration={1000}>
                            <MenuButtonLarger text={`Kontakt`}/>                           
                        </Link>   
                        </>      
                  )
              }
              else {
                return (
                    <>
                        <NavHashLink to="" smooth={true} duration={1000}>
                            <MenuButtonLarger text={`Start`}/>                             
                        </NavHashLink>              
                         <NavHashLink to="simpleSteps" smooth={true} duration={1000}>
                            <MenuButtonLarger text={`O co chodzi?`}/>                            
                         </NavHashLink>    
                         <NavHashLink to="aboutUs" smooth={true} duration={1000}>
                            <MenuButtonLarger text={`O nas`}/>                          
                         </NavHashLink>              
                         <NavHashLink to="whoWeHelp" smooth={true} duration={1000}>
                            <MenuButtonLarger text={`Fundacja i organizacje`}/>                            
                         </NavHashLink> 
                         <NavHashLink to="contact" smooth={true} duration={1000}>
                            <MenuButtonLarger text={`Kontakt`}/>                            
                         </NavHashLink> 
                         </>         
                )
              }          
            })()}              
                </div>
            </div>          
        )
}

export default AppMenu;