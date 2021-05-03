import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getLoggedBool} from '../../../API/fetch';
import AppMenu from '../../appMenu/AppMenu';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import BigUppercaseBtn from '../../atoms/buttons/BigUppercaseBtn';
import HomeHeaderImage from '../homePageFragments/HomeHeaderImage';
import LargeTxtWithDecor from '../homePageFragments/LargeTxtWithDecor';

const HomeHeader = () => { 
    let [logged, setLogged] = useState("");
   
    useEffect(() => {
        getLoggedBool(setLogged);  
        //scroll up button control
        const scrollUpArrow = document.querySelector('aside');       
        scrollUpArrow.style.bottom = '50px';
    }, [])  

    return ( 
        <> 
        <div className="scroll-up-arrow"><ScrollUpButton /></div>           
        <div className="header-container">
            <HomeHeaderImage />
        <div className="header-right-side container-half">
            <div className="login-menu-container">                     
                    <AppMenu homeOrLogin={"home"} loggedIn={logged} />              
            </div>
            <div className="header-right-side--content">                
                    <LargeTxtWithDecor text={`Zacznij pomagać!`} textSecondLine={` Oddaj niechciane rzeczy w zaufane ręce`} 
                      className={`decorated-text--large`} wrapperClass={`header-right-side--content__text--header`} />
                <div className="header-right-side--content__buttons">
                    <Link to="/login">
                        <BigUppercaseBtn text={`oddaj rzeczy`} />
                    </Link>
                    <Link to="/login">
                        <BigUppercaseBtn text={`zorganizuj zbiórkę`} />                     
                    </Link>              
                </div>
            </div>
            </div>
        </div>  
        </>      
    )
}

export default HomeHeader;
