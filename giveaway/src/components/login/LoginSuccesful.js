import React, {useState, useEffect} from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import HomeHeaderMenu from "C:/CodersLab/Portfolio_react_app/giveaway/src/components/atoms/commonRenders/HomeHeaderMenu.js";
import {Link} from 'react-router-dom';
import { getLoggedBool } from '../../API/fetch';
import { fetchLogged } from '../functionsStorage/functions';
// import { getLoggedBool, setLoggedFetch } from '../../../API/fetch';
// import { fetchLogged } from '../../functionsStorage/functions';

const LoginSuccesful = () => {    
    let [logged, setLogged] = useState("");
   
    useEffect(() => {        
       getLoggedBool(setLogged);    
    }, [])

    console.log(logged, "logged w logout");

    fetchLogged(true);



    return (
        <div className="login-container container-full">       
            <div className="login-menu-container" >                   
              
              <HomeHeaderMenu homeOrLogin={"notHome"} loggedIn={logged}/>        
    
            </div>   
            <div className="login-text-container">
                <h1 className="login-text">Zalogowanie nastąpiło pomyślnie</h1>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
            </div>     
            <div className="login-form-buttons-container" >                        
                <Link to="/home">
                    <button className="btn form-submit-button" >Strona główna</button>
                </Link>                     
            </div>              
        </div>
    )
}

export default LoginSuccesful;