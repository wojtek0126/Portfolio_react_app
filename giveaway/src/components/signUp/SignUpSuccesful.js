import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getLoggedBool} from '../../API/fetch';
import {fetchLogged} from '../functionsStorage/functions';
import AppMenu from '../appMenu/AppMenu.js';
import SmallButton from '../atoms/buttons/SmallButton';
import DecorBigWithTxtBig from '../molecules/DecorBigWithTxtBig';

const SignUpSuccesful = () => {    
    let [logged, setLogged] = useState("");
   
    useEffect(() => {        
       getLoggedBool(setLogged);    
    }, [])

    console.log(logged, "logged w logout");

    fetchLogged(true);

    return (
        <div className="login-container container-full">       
            <div className="login-menu-container" >                  
              <AppMenu homeOrLogin={"notHome"} loggedIn={logged}/>            
            </div>   
            <div className="login-text-container">
            <DecorBigWithTxtBig textTop={`Zarejestrowano pomyślnie`} />              
            </div>     
            <div className="login-form-buttons-container" >                        
                <Link to="/home">
                    <SmallButton text={`Strona główna`} />
                </Link>                     
            </div>              
        </div>
    )
}

export default SignUpSuccesful;