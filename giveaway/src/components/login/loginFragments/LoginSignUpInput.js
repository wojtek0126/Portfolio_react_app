import React, {useState, useEffect} from 'react';


const LoginSignUpInput = ({onChangeEmail, onChangePassword, onChangeRepeat, errEmailId, errPassId, errRepeatPassId,
    emailId, passId, repeatPassId }) => {
    let [urlName, setUrlName] = useState("");

useEffect(() => {
    setUrlName(window.location.pathname);
},[urlName])

    return (
        <>
          <div className="login-form-container">
          <label>Email
                    <input id={emailId} type="email" onChange={onChangeEmail}></input>
                    <p id={errEmailId} className="login-email--error-message"></p>
                </label>                  
                <label>Hasło
                    <input id={passId} type="password" onChange={onChangePassword}></input>
                    <p id={errPassId} className="login-password--error-message"></p>
                </label>                    
        {(() => {
              if(urlName.indexOf('/signUp') > -1) {
                  return (
                    <label>Powtórz hasło
                        <input id={repeatPassId} type="password" onChange={onChangeRepeat}></input>
                        <p id={errRepeatPassId} className="login-confirm-password--error-message"></p>
                    </label>   
                  )
              } 
              else {
                  return null;
              }                
            })()} 
             </div>      
        </>
    )
}

export default LoginSignUpInput;