import React from 'react';
import { fetchSetStep, handleChoice, setStep } from '../../functionsStorage/functions';
import bear from '../../../assets/images/bear.jpg'
import Contact from '../../homePage/contact/Contact';
import HomeFooter from '../../homePage/footer/HomeFooter';
// import { setStep } from '../../../API/fetch';

const  SendStep2 = () => {  
    // let step = {
    //     "currentStep": 4
    // }
    // setStepFetch(step);
    return (     
        <>      
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 2/4</p>
                    <form className="step2-form">
                        <p>Podaj liczbę 60l worków, w które spakowałeś rzeczy</p>                    
                          <label>Liczba 60l worków
                          <select  onChange={handleChoice("bags")}>
                                           <option>1</option>
                                           <option>2</option>
                                           <option>3</option>
                                           <option>4</option>
                                           <option>5</option>
                                       </select>
                              </label>   
                           <div className="step-form__buttons">
                            <button onClick={setStep(1)} className="btn steps-button yellow-hover-btn">Wstecz</button>
                            <button onClick={setStep(3)} className="btn steps-button yellow-hover-btn">Dalej</button>
                        </div>
                    </form>                    
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear" className="container-full"/>
                </div>
            </div>  
            <Contact />
            <HomeFooter />  
            </>   
    )
}

export default SendStep2