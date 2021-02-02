import React, {useState} from 'react';
import HomeHeaderMenu from '../atoms/commonRenders/HomeHeaderMenu';
import Rhomb from './Rhomb';
import SendStep1 from './sendStep1/SendStep1';
import SendStep2 from './sendStep2/SendStep2';
import SendStep3 from './sendStep3/SendStep3';
import SendStep4 from './sendStep4/SendStep4';
import SendSuccesful from './sendSuccesful/SendSuccesful';
import SendSummary from './sendSummary/SendSummary';


import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import Sweater from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/sweater.jpg';


const  StepsBase = () => {
    // const [step, setStep] = useState(1);
    // localStorage.setItem("step", 1)
    let currentStep = localStorage.getItem("step");
    console.log(currentStep);
    const StepHandler = ({step}) => {
       
        if (step === "1" || step === 1) {
            return (
                <SendStep1 />
            )
        }
        else if (step === "2" || step === 2) {
            return (
                <SendStep2 />
            )
        }
        else if (step === "3" || step === 3) {
            return (
                <SendStep3 />
            )
        }
        else if (step === "4" || step === 4) {
            return (
                <SendStep4 />
            )
        }
        else if (step === "5" || step === 5) {
            return (
                <SendSummary />
            )
        }
        else if (step === "6" || step === 6) {
            return (
                <SendSuccesful />
            )
        }
    }

    return (
        <div className="step1-container">
            <div className="step1-top">
                <div className="step1-top-left">
                <img src={Sweater} className="steps-left-side--img" alt="steps-top-left-img" />
                </div>
                <div className="step1-top-right">
                <div className="login-menu-container" >                        
              
              <HomeHeaderMenu homeOrLogin={"notHome"} loggedIn={true}/>        

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
                
                <StepHandler step={currentStep} />
            </div>

        </div>
    )
}

export default StepsBase