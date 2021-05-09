import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
import {logOut} from '../functionsStorage/functions';
import {getLoggedBool} from '../../API/fetch';
import MenuButtonSmall from './MenuButtonSmall';
import MenuButtonLarger from './MenuButtonLarger';
import Burger from './RWD/Burger';
import MenuBtnLarLogin from './MenuBtnLarLogin';

//prop loggedIn is taken from components: login, signup, logout, homeheader, steps(all) - from where menu is
const AppMenu = ({homeOrLogin, loggedIn, containerClass, topClass, bottomClass}) => {  
    let [logged, setLogged] = useState([]);

    useEffect(() => {
        getLoggedBool(setLogged);       
    
    }, [])     

    let userName = localStorage.getItem("loginName");   
    localStorage.setItem("NextStep", 1);    

   
        return (          
            <div className="login-menu-container" id="menuContainer">  
                <div className="burger-container">
                 <Burger />       
                </div>                   
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
                            <MenuButtonLarger text={`Start`} id={`startButton`}/>                            
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
                        <MenuBtnLarLogin text={`Start`} linkTo={`home#home`}/>                                 
                        <MenuBtnLarLogin text={`O co chodzi?`} linkTo={`home#simpleSteps`}/>    
                        <MenuBtnLarLogin text={`O nas`} linkTo={`home#aboutUs`}/>            
                        <MenuBtnLarLogin text={`Fundacja i organizacje`} linkTo={`home#whoWeHelp`}/>                            
                        <MenuBtnLarLogin text={`Kontakt`} linkTo={`home#contact`}/>                                                     
                    </>         
                )
              }          
            })()}              
                </div>
            </div>          
        )
}

export default AppMenu;