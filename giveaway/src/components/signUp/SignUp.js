import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {handleEmailInput, handleSignUpSubmit, handleValueInput} from '../functionsStorage/functions';
import AppMenu from '../appMenu/AppMenu';
import SmallButton from '../atoms/buttons/SmallButton';
import LargeTxtWithDecor from '../homePage/homePageFragments/LargeTxtWithDecor';
import LoginSignUpInput from '../login/loginFragments/LoginSignUpInput';

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
              <AppMenu homeOrLogin={"notHome"} loggedIn={loggedIn}/>
            </div>   
            <div className="login-text-container">
                <LargeTxtWithDecor text={`Załóż konto`} />            
            </div>           
            <form >
            <LoginSignUpInput onChangeEmail={handleEmailInput(setEmailData, `loginName`)}
                              onChangePassword={handleValueInput(setPasswordData)}
                              onChangeRepeat={handleValueInput(setPasswordRepeatData)} 
                              errEmailId={ `errorEmail`} errPassId={`errorPassword`} errRepeatPassId={`errorRepeatPassword`} 
                              emailId={`loginEmail2`} passId={`loginPassword2`} repeatPassId={`loginPasswordRepeat`}
                              />                 
                    <div className="login-form-buttons-container" >                
                        <SmallButton text={`Załóż konto`} onClick={handleSignUpSubmit(passwordData, passwordRepeatData, emailData,
                         setLoggedIn, setPasswordData, setPasswordRepeatData,setEmailData,
                         `errorEmail`, `errorPassword`, `errorRepeatPassword`, `loginEmail2`,`loginPassword2`, `loginPasswordRepeat`, 
                         `black`, `#DC143C`
                        )} />                
                        <Link to="/login">
                           <SmallButton text={`Zaloguj się`} />
                        </Link>                          
                    </div>                               
            </form>
        </div>
    )
}

export default SignUp;