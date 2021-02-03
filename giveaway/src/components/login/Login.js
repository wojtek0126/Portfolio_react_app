import React, {useState} from 'react';
import Decoration from '../../assets/icons/Decoration.svg';
import {Link} from 'react-router-dom';
import {handleLoginValidation, nullifyInputValue, nullifyState, switchBorderColor} from '../functionsStorage/functions';
import HomeHeaderMenu from '../atoms/commonRenders/HomeHeaderMenu';

const Login = () => {
    let [emailData, setEmailData] = useState([]);
    let [passwordData, setPasswordData] = useState([]);   
    let [loggedIn, setLoggedIn] = useState(false);   

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
            <form onSubmit={
                 handleLoginValidation(passwordData, emailData, setLoggedIn, setPasswordData, setEmailData,
                    `errorMessageEmail`, `errorMessagePassword`, `loginEmail`,`loginPassword`, `black`, `#DC143C`)           
                    }>
                    <div className="login-form-container">
                        <label>Email
                            <input id="loginEmail" type="email" onChange={handleEmailChange}></input>
                            <p id="errorMessageEmail" className="login-email--error-message"></p>
                        </label>
                        <label>Hasło
                            <input id="loginPassword" type="password" onChange={handlePasswordChange}></input>
                            <p id="errorMessagePassword"className="login-password--error-message"></p>
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