import React from 'react';
import { nextStep, handleRadioChoice1, fetchSetStep, handleRadioChoice2, setStep } from '../../functionsStorage/functions';
import bear from '../../../assets/images/bear.jpg'
import Contact from '../../homePage/contact/Contact';
import HomeFooter from '../../homePage/footer/HomeFooter';
import { Link } from 'react-router-dom';
// import { setStep } from '../../../API/fetch';

const  SendStep1 = () => {
    //local storage item check in console
    // console.log(localStorage.getItem("step"));    
    // const setStep = (stepNumber) => {
    //     let step = {
    //         "currentStep": 2
    //     }
    //     setStepFetch(step);
    // }

  
    return (   
        <>        
            <div className="step-bottom-container container-full">
                <div className="step-bottom-left">
                    <p>Krok 1/4</p>
                    <form className="step1-form">                        
                        <p>Zaznacz co chcesz oddać</p>
                        <label>
                            <button className="radio-choice-button yellow-hover-btn" onClick={handleRadioChoice2(`step`)}></button>ubrania, które nadają się do ponownego użycia
                        </label>
                        <label>
                            <button className="radio-choice-button yellow-hover-btn" onClick={handleRadioChoice2(`step`)}></button>ubrania do wyrzucenia
                        </label>
                        <label>     
                        <button className="radio-choice-button yellow-hover-btn" onClick={handleRadioChoice2(`step`)}></button>zabawki 
                        </label>
                        <label>
                        <button className="radio-choice-button yellow-hover-btn" onClick={handleRadioChoice2(`step`)}></button>książki
                        </label>
                        <label>
                        <button className="radio-choice-button yellow-hover-btn" onClick={handleRadioChoice2(`step`)}></button>inne
                        </label>   
                        <Link to="/step2">
                         <button className="btn steps-button yellow-hover-btn" type="submit" onClick={() => setStep(3)} >Dalej</button>
                        </Link>                          
                    </form>                    
                </div>
                <div className="step-bottom-right">
                    <img className="container-full" src={bear} alt="bear" className="steps-bear-img"/>
                </div>
                    
            </div>   
            <Contact />
            <HomeFooter />
            </>    
    )
}

export default SendStep1