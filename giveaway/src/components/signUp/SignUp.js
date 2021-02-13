import React, {useState, useEffect} from 'react';
import Decoration from '../../assets/icons/Decoration.svg';
import {Link} from 'react-router-dom';
import {handleEmailInput, handleSignUpSubmit, handleValueInput} from '../functionsStorage/functions';
import HomeHeaderMenu from '../atoms/commonRenders/HomeHeaderMenu';

const SignUp = () => {
    let [emailData, setEmailData] = useState("");
    let [passwordData, setPasswordData] = useState("");  
    let [passwordRepeatData, setPasswordRepeatData] = useState(""); 
    let [loggedIn, setLoggedIn] = useState(false);   
    
    useEffect(() => {
        localStorage.setItem("loggedIn", loggedIn);
    }, [])
   
    return (
        <div className="login-container container-full">       
            <div className="login-menu-container" >            
              <HomeHeaderMenu homeOrLogin={"notHome"} loggedIn={loggedIn}/>
            </div>   
            <div className="login-text-container">
                <h1 className="login-text">Załóż konto</h1>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
            </div>           
            <form >
                    <div className="login-form-container">
                        <label className="login-form-top">Email
                            <input id="loginEmail2" type="email" onChange={handleEmailInput(setEmailData, `loginName`)}></input>
                            <p id="errorEmail" className="login-email--error-message"></p>
                        </label>
                        <label>Hasło
                            <input id="loginPassword2" type="password" onChange={handleValueInput(setPasswordData)}></input>
                            <p id="errorPassword" className="login-password--error-message"></p>
                        </label>
                        <label>Powtórz hasło
                            <input id="loginPasswordRepeat" type="password" onChange={handleValueInput(setPasswordRepeatData)}></input>
                            <p id="errorRepeatPassword" className="login-confirm-password--error-message"></p>
                        </label>
                    </div>
                    <div className="login-form-buttons-container" >    
                        <button className="btn form-submit-button" onClick={handleSignUpSubmit(passwordData, passwordRepeatData, emailData,
             setLoggedIn, setPasswordData, setPasswordRepeatData,setEmailData,
             `errorEmail`, `errorPassword`, `errorRepeatPassword`, `loginEmail2`,`loginPassword2`, `loginPasswordRepeat`, 
             `black`, `#DC143C`
            )}>Załóż konto</button>                    
                        <Link to="/login">
                            <button className="btn form-submit-button">Zaloguj się</button>
                        </Link>                          
                    </div>                               
            </form>
        </div>
    )
}

export default SignUp;