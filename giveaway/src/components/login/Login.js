import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {handleEmailInput, handleLoginValidation, handleValueInput} from '../functionsStorage/functions';
import AppMenu from '../appMenu/AppMenu';
import LargeTxtWithDecor from '../homePage/homePageFragments/LargeTxtWithDecor';
import LoginSignUpInput from './loginFragments/LoginSignUpInput';
import SmallButton from '../atoms/buttons/SmallButton';

const Login = () => {
    let [emailData, setEmailData] = useState([]);
    let [passwordData, setPasswordData] = useState([]);     
    let [loggedIn, setLoggedIn] = useState(false);    
    
    //fix error messages appearing after login renders by setting it once to empty
    // setTimeout(() => {
    //     const initClearErrorMessageEmail = document.getElementById(`errorMessageEmail`);
    //     const initClearErrorMessagePassword = document.getElementById(`errorMessagePassword`);
    //     initClearErrorMessageEmail.innerHTML = "";
    //     initClearErrorMessagePassword.innerHTML = "";
    // },0);    

    return (
        <div className="login-container container-full">       
            <div className="login-menu-container" >         
                <AppMenu homeOrLogin={"notHome"} loggedIn={loggedIn}/> 
            </div> 
            <div className="login-form-whole-container">
                <div className="login-text-container">
                    <LargeTxtWithDecor text={`Zaloguj się`} wrapperClass={`large-decor-text-mobile`} />
                </div>           
                    <form >
                    <LoginSignUpInput onChangeEmail={handleEmailInput(setEmailData, `loginName`)}
                                    onChangePassword={handleValueInput(setPasswordData)} 
                                    errEmailId={ `errorMessageEmail`} errPassId={`errorMessagePassword`}
                                    emailId={`loginEmail`} passId={`loginPassword`} />                
                            <div className="login-form-buttons-container" >                                     
                                <Link to="/signUp">
                                    <SmallButton text={`Załóż konto`} />                            
                                </Link>                    
                                    <SmallButton text={`Zaloguj się`} onClick={ handleLoginValidation(passwordData, emailData,
                                                setLoggedIn, setPasswordData, setEmailData,
                                                `errorMessageEmail`, `errorMessagePassword`, `loginEmail`,`loginPassword`,
                                                `black`, `#DC143C`)} />
                            </div>                               
                    </form>
            </div>       
        </div>
    )
}

export default Login;