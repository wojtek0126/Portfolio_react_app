import React, {useState} from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import HomeHeaderMenu from "C:/CodersLab/Portfolio_react_app/giveaway/src/components/atoms/commonRenders/HomeHeaderMenu.js";

import {Link} from 'react-router-dom';
import {nullifyState} from '../functionsStorage/functions';

const Login = () => {
    let [emailData, setEmailData] = useState([]);
    let [passwordData, setPasswordData] = useState([]);   

    function handleLoginSubmit(e){
        e.preventDefault();
        const emailErrorMessage = document.querySelector(".login-email--error-message");
        const passwordErrorMessage = document.querySelector(".login-password--error-message");
       
        if (passwordData.length < 6) {
            nullifyState(setPasswordData);
            passwordErrorMessage.innerText = "Podane hasło jest nieprawidłowe"          
        }
        else if (passwordData.length >= 6) {
            nullifyState(setPasswordData);
            passwordErrorMessage.innerText = "";
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) === true) {
            //if email contains email chars
           nullifyState(setEmailData);
           emailErrorMessage.innerText = "";
        }
        else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) === false) {
            emailErrorMessage.innerText = "Podany email jest nieprawidłowy" 
        }     
        nullifyState(setPasswordData);
        nullifyState(setEmailData);
    }

    const handleEmailChange = (e) => {     
        console.log(e.target.value);
        setEmailData(e.target.value)
    }
    const handlePasswordChange = (e) => {    
        console.log(e.target.value);
        setPasswordData(e.target.value)
    }  

    return (
        <div className="login-container">       
            <div className="login-menu-container" >
                <div className="login-menu__top">
                        <Link to="/login">
                            <button className="btn menu-top-button" href="">Zaloguj się</button>
                        </Link> 
                        <Link to="/signUp">
                            <button className="btn menu-top-button" href="">Załóż konto</button>
                        </Link>                   
                    </div>  
                <div className="login-menu__bottom ">
                    <HomeHeaderMenu homeOrLogin={"login"}/>
                </div>
            </div>   
            <div className="login-text-container">
                <h1 className="login-text">Zaloguj się</h1>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
            </div>           
            <form onSubmit={handleLoginSubmit}>
                    <div className="login-form-container">
                        <label>Email
                            <input type="email" onChange={handleEmailChange}></input>
                            <p className="login-email--error-message"></p>
                        </label>
                        <label>Hasło
                            <input type="password" onChange={handlePasswordChange}></input>
                            <p className="login-password--error-message"></p>
                        </label>
                    </div>
                    <div className="login-form-buttons-container" >                        
                        <Link to="/signUp">
                             <button className="btn form-submit-button">Załóż konto</button>
                        </Link>   
                        <button className="btn form-submit-button">Zaloguj się</button>
                    </div>                               
            </form>
        </div>
    )
}

export default Login;