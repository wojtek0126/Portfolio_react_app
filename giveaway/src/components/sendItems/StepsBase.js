import React, {useState} from 'react';
import HomeHeaderMenu from '../atoms/commonRenders/HomeHeaderMenu';
import Rhomb from './Rhomb';
import SendStep1 from './sendStep1/SendStep1';

import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import Sweater from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/sweater.jpg';


const  StepsBase = () => {
    const [step, setStep] = useState(1);

    const handleClick = () => {
        setStep(step++);
    }

    return (
        <div className="step1-container">
            <div className="step1-top">
                <div className="step1-top-left">
                <img src={Sweater} className="steps-left-side--img" alt="steps-top-left-img" />
                </div>
                <div className="step1-top-right">
                <div className="login-menu-container" >
                <div className="login-menu__top">
                        {/* <Link to="/login"> */}
                            <button className="btn menu-top-button" href="">Oddaj rzeczy</button>
                        {/* </Link>  */}
                        {/* <Link to="/signUp"> */}
                            <button className="btn menu-top-button" href="">Wyloguj</button>
                        {/* </Link>                    */}
                    </div>  
                <div className="login-menu__bottom ">
                    <HomeHeaderMenu homeOrLogin={"login"}/>
                </div>
            </div>   
                    <div className="step1-top-right__content">
                        <h2>Oddaj rzeczy, których już nie chcesz<p>POTRZEBUJĄCYM</p></h2>                        
                        <img src={Decoration} alt="decor" className="header-right-side--content__decoration" />
                        <div className="header-right-side--content__rhombs">
                            <Rhomb number={1} textRhomb={"Wybierz rzeczy"} />
                            <Rhomb number={2} textRhomb={"Spakuj je w worki"}/>
                            <Rhomb number={3} textRhomb={"Wybierz fundację"} />
                            <Rhomb number={4} textRhomb={"Zamów kuriera"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="step1-middle">
                <h1>Ważne!</h1>
                <h3>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieli komu najlepiej je przekazać.</h3>
            </div>
            <div className="step1-bottom">
                
                    {/* {if (step === 1) {
                        return (
                            <SendStep1 />
                        )
                    }} */}
                
                <SendStep1 />
            </div>

        </div>
    )
}

export default StepsBase