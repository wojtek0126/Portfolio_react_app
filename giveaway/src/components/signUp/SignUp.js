import React from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import HomeHeaderMenu from "C:/CodersLab/Portfolio_react_app/giveaway/src/components/atoms/commonRenders/HomeHeaderMenu.js";
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="login-container">       
            <div className="login-menu-container" >
                <div className="login-menu__top">
                        <Link to="/login">
                            <button className="btn menu-top-button" href="">Zaloguj się</button>
                        </Link> 
                        <Link to="/signUp">
                            <button className="btn menu-top-button" href="">Załóż konto</button>
                        </Link>                   
                    </div>  
                <div className="login-menu__bottom ">
                    <HomeHeaderMenu homeOrLogin={"login"}/>
                </div>
            </div>   
            <div className="login-text-container">
                <h1 className="login-text">Załóż konto</h1>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
            </div>           
            <form>
                    <div className="login-form-container">
                        <label>Email
                            <input type="email"></input>
                        </label>
                        <label>Hasło
                            <input type="password"></input>
                        </label>
                        <label>Powtórz hasło
                            <input type="password"></input>
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