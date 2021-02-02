import React, {useState} from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import HomeHeaderMenu from "C:/CodersLab/Portfolio_react_app/giveaway/src/components/atoms/commonRenders/HomeHeaderMenu.js";

import {Link} from 'react-router-dom';
import {nullifyInputValue, nullifyState, switchBorderColor} from '../functionsStorage/functions';

const Login = () => {
    let [emailData, setEmailData] = useState([]);
    let [passwordData, setPasswordData] = useState([]);   
    let [loggedIn, setLoggedIn] = useState(false);

    function handleLoginSubmit(e){
        e.preventDefault();
        const emailErrorMessage = document.querySelector(".login-email--error-message");
        const passwordErrorMessage = document.querySelector(".login-password--error-message");
        const emailInputField = document.getElementById("loginPassword");
        const passwordInputField = document.getElementById("loginEmail");
        const errorColor = "#DC143C";
        const validColor = "black";
        let isEmailValid = false;
        let isPasswordVaild = false;
       
        if (passwordData.length < 6) {           
            passwordErrorMessage.innerText = "Podane hasło jest nieprawidłowe";
            // passwordInputField.style.borderColor = "#DC143C";  
            isPasswordVaild = false;
                       
        }
        else if (passwordData.length >= 6) {           
            passwordErrorMessage.innerText = "";               
            passwordInputField.style.borderColor = "black";   
            isPasswordVaild = true;                       
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) === true) {
            //if email contains email chars         
           emailErrorMessage.innerText = "";
           emailInputField.style.borderColor = "black"; 
           isEmailValid = true;  
             
        }
        else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) === false) {
            emailErrorMessage.innerText = "Podany email jest nieprawidłowy" 
            isEmailValid = false;                     
        }     
      
     
        if (isPasswordVaild === true && isEmailValid === true){
            alert("przesłano pomyślnie");   
            setLoggedIn(true);
            localStorage.setItem("loggedIn", true);    
             localStorage.setItem("step", 1)
        }      
            nullifyState(setPasswordData);
            nullifyState(setEmailData);
            nullifyInputValue(emailInputField);
            nullifyInputValue(passwordInputField);    
    }

    const handleEmailChange = (e) => {  
        let loginName = e.target.value   
        console.log(e.target.value);
        setEmailData(e.target.value)
        localStorage.setItem("loginName", loginName);
    }
    const handlePasswordChange = (e) => {    
        console.log(e.target.value);
        setPasswordData(e.target.value)
    }  

    return (
        <div className="login-container">       
            <div className="login-menu-container" >                       
              
              <HomeHeaderMenu homeOrLogin={"notHome"} loggedIn={false}/>        
      
            </div>   
            <div className="login-text-container">
                <h1 className="login-text">Zaloguj się</h1>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
            </div>           
            <form onSubmit={handleLoginSubmit}>
                    <div className="login-form-container">
                        <label>Email
                            <input id="loginEmail" type="email" onChange={handleEmailChange}></input>
                            <p className="login-email--error-message"></p>
                        </label>
                        <label>Hasło
                            <input id="loginPassword" type="password" onChange={handlePasswordChange}></input>
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