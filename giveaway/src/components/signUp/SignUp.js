import React, {useState} from 'react';
import Decoration from '../../assets/icons/Decoration.svg';

import {Link} from 'react-router-dom';
import { compareTwoStrings, nullifyInputValue, nullifyStateString } from '../functionsStorage/functions';
import HomeHeaderMenu from '../atoms/commonRenders/HomeHeaderMenu';

const SignUp = () => {
    let [emailData, setEmailData] = useState("");
    let [passwordData, setPasswordData] = useState("");  
    let [passwordRepeatData, setPasswordRepeatData] = useState(""); 
    // let IsLoggedIn = localStorage.getItem("loggedIn");      

    function handleLoginSubmit(e){
        

        e.preventDefault();
        const emailErrorMessage = document.querySelector(".login-email--error-message");
        const passwordErrorMessage = document.querySelector(".login-password--error-message");
        const confirmPasswordErrorMessage = document.querySelector(".login-confirm-password--error-message");
        const emailInputField = document.getElementById("loginPassword2");        
        const passwordInputField = document.getElementById("loginEmail2");
        const passwordRepeatInputField = document.getElementById("loginPasswordRepeat");
        const errorColor = "#DC143C";
        const validColor = "black";
        let isEmailValid = false;
        let isPasswordVaild = false;
        let isPasswordConfirmed = false;
        let isEmptyInput = true;

       if (emailData === null || passwordData === null || passwordRepeatData === null) {
           isEmptyInput = true;         
       }
       else if (emailData !== null && passwordData !== null && passwordRepeatData !== null)  {
           isEmptyInput = false;
       }
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
        if (passwordData === null || passwordRepeatData === null) {
            isPasswordConfirmed = false;
            confirmPasswordErrorMessage.innerHTML = "hasło lub potwierdzenie hasła nieprawidłowe";
        }
        if (compareTwoStrings(passwordData, passwordRepeatData) === true) {
            if (passwordData === null || passwordRepeatData === null) {
                isPasswordConfirmed = false;
                confirmPasswordErrorMessage.innerHTML = "hasło lub potwierdzenie hasła nieprawidłowe";
            }
            else {                
                confirmPasswordErrorMessage.innerHTML = "";
                isPasswordConfirmed = true;
            }           
         }    
        else if (compareTwoStrings(passwordData, passwordRepeatData) === false) {         
            confirmPasswordErrorMessage.innerHTML = "Hasło nieprawidłowe";
            isPasswordConfirmed = false;
         }      
        if (isPasswordVaild === true && isEmailValid === true && isPasswordConfirmed === true && isEmptyInput === false){
            alert("przesłano pomyślnie");        
        }      
            nullifyStateString(setPasswordData);
            nullifyStateString(setEmailData);
            nullifyStateString(setPasswordRepeatData);
            nullifyInputValue(emailInputField);
            nullifyInputValue(passwordInputField);
            nullifyInputValue(passwordRepeatInputField);      
    }

    const handleEmailChange = (e) => {     
        console.log(e.target.value);
        setEmailData(e.target.value)
    }
    const handlePasswordChange = (e) => {    
        console.log(e.target.value);
        setPasswordData(e.target.value)
    }  
    const handlePasswordRepeatChange = (e) => {    
        console.log(e.target.value);
        setPasswordRepeatData(e.target.value)
    } 
    return (
        <div className="login-container">       
            <div className="login-menu-container" >                   
              
              <HomeHeaderMenu homeOrLogin={"notHome"} loggedIn={false}/>
        
    
            </div>   
            <div className="login-text-container">
                <h1 className="login-text">Załóż konto</h1>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
            </div>           
            <form onSubmit={handleLoginSubmit}>
                    <div className="login-form-container">
                        <label className="login-form-top">Email
                            <input id="loginEmail2" type="email" onChange={handleEmailChange}></input>
                            <p className="login-email--error-message"></p>
                        </label>
                        <label>Hasło
                            <input id="loginPassword2" type="password" onChange={handlePasswordChange}></input>
                            <p className="login-password--error-message"></p>
                        </label>
                        <label>Powtórz hasło
                            <input id="loginPasswordRepeat" type="password" onChange={handlePasswordRepeatChange}></input>
                            <p className="login-confirm-password--error-message"></p>
                        </label>
                    </div>
                    <div className="login-form-buttons-container" >    
                        <button className="btn form-submit-button">Załóż konto</button>                    
                        <Link to="/login">
                            <button className="btn form-submit-button">Zaloguj się</button>
                        </Link>   
                       
                    </div>                               
            </form>
        </div>
    )
}

export default SignUp;