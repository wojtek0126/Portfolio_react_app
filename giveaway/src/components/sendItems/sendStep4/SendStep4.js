import React from 'react';
import { handleChoice, nextStep, setStep } from '../../functionsStorage/functions';
import bear from '../../../assets/images/bear.jpg'
import Contact from '../../homePage/contact/Contact';
import HomeFooter from '../../homePage/footer/HomeFooter';
import { setStepFetch } from '../../../API/fetch';

const  SendStep4 = () => {  
    // const fetchSetStep = (number) => (e) => {
    //     // e.preventDefault();
    //     let step = {
    //         "currentStep": number
    //     }
    //     setStepFetch(step);
    //     // window.location.reload();
    //   }
    //   fetchSetStep(5);
    return (   
        <>        
            <div className="step-bottom-container">
                <div className="step4-bottom-left">
                    <p>Krok 4/4</p>
                    <form>
                        <p>Podaj adres oraz termin odbiorurzeczy przez kuriera</p>                              
                        <div className="step4-form__container">
                            <div className="step4-form__left">
                                <span className="step3-paragraph">Adres odbioru:</span>
                                    <label className="step4-label">Ulica
                                        <input type="text" onChange={handleChoice("street")} ></input>
                                    </label>
                                    <label className="step4-label">Miasto
                                        <input type="text" onChange={handleChoice("city")}></input>
                                    </label>
                                    <label className="step4-label">Kod pocztowy
                                        <input id="zip" name="zip" type="text" pattern="[0-9]*" onChange={handleChoice("postCode")}></input>
                                    </label>
                                    <label className="step4-label">Numer telefonu
                                        <input input type="tel" id="phone" name="phone"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            required onChange={handleChoice("tel")}></input>
                                    </label>
                                </div>                        
                                <div className="step4-form__right">
                                    <span className="step3-paragraph">Termin odbioru:</span>
                                    <label className="step4-label">Data
                                        <input type="date" onChange={handleChoice("date")}></input>
                                    </label>
                                    <label className="step4-label">Godzina
                                        <input type="time" onChange={handleChoice("time")}></input>
                                    </label>
                                    <label className="step4-label">Uwagi do kuriera
                                        <textarea onChange={handleChoice("extraNotes")}></textarea>
                                    </label>                                    
                                </div>  
                            </div>                                     
                        <div className="step-form__buttons">
                            <button onClick={setStep(3)} className="btn steps-button yellow-hover-btn">Wstecz</button>
                            <button onClick={setStep(5)} className="btn steps-button yellow-hover-btn">Dalej</button>
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

export default SendStep4
