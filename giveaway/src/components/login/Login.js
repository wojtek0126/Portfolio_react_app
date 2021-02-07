import React, {useState, useEffect} from 'react';
import Decoration from '../../assets/icons/Decoration.svg';
import {Link} from 'react-router-dom';
import {handleLoginValidation, handleValueInput} from '../functionsStorage/functions';
import HomeHeaderMenu from '../atoms/commonRenders/HomeHeaderMenu';

const Login = () => {
    let [emailData, setEmailData] = useState([]);
    let [passwordData, setPasswordData] = useState([]);   
    let [loggedIn, setLoggedIn] = useState(false);  
    console.log(loggedIn, "logggggggbefore")
    useEffect(() => {
        localStorage.setItem("loggedIn", loggedIn);
    }, [])
    
console.log(loggedIn, "loggggggg")

    return (
        <div className="login-container container-full">       
            <div className="login-menu-container" >         
              <HomeHeaderMenu homeOrLogin={"notHome"} loggedIn={loggedIn}/> 
            </div>   
            <div className="login-text-container">
                <h1 className="login-text">Zaloguj się</h1>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
            </div>           
            <form onSubmit={
                 handleLoginValidation(passwordData, emailData,
                     setLoggedIn, setPasswordData, setEmailData,
                    `errorMessageEmail`, `errorMessagePassword`, `loginEmail`,`loginPassword`,
                     `black`, `#DC143C`)           
                    }>
                    <div className="login-form-container">
                        <label>Email
                            <input id="loginEmail" type="email" onChange={handleValueInput(setEmailData, `loginName`)}></input>
                            <p id="errorMessageEmail" className="login-email--error-message"></p>
                        </label>
                        <label>Hasło
                            <input id="loginPassword" type="password" onChange={handleValueInput(setPasswordData)}></input>
                            <p id="errorMessagePassword"className="login-password--error-message"></p>
                        </label>
                    </div>
                    <div className="login-form-buttons-container" >                        
                        <Link to="/signUp">
                             <button className="btn form-submit-button">Załóż konto</button>
                        </Link>   
                        <button className="btn form-submit-button" type="submit">Zaloguj się</button>
                    </div>                               
            </form>
        </div>
    )
}

export default Login;