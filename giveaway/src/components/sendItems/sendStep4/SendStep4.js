import React, {useState} from 'react';
import Select from 'react-select'
import { nextStep } from '../../functionsStorage/functions';
import bear from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/bear.jpg'

const  SendStep4 = () => {  

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 4/4</p>
                    <form>
                        <h3>Podaj adres oraz termin odbiorurzeczy przez kuriera</h3>
                       
                               
                        <div className="step4-form__container">
                            <div className="step4-form__left">
                                <p>Adres odbioru:</p>
                                    <label>Ulica
                                        <input></input>
                                    </label>
                                    <label>Miasto
                                        <input></input>
                                    </label>
                                    <label>Kod pocztowy
                                        <input></input>
                                    </label>
                                    <label>Numer telefonu
                                        <input></input>
                                    </label>
                                </div>
                        
                                <div className="step4-form__right">
                                    <p>Termin odbioru:</p>
                                    <label>Data
                                        <input></input>
                                    </label>
                                    <label>Godzina
                                        <input></input>
                                    </label>
                                    <label>Uwagi do kuriera
                                        <textarea></textarea>
                                    </label>                                    
                                </div>  
                            </div>
                                     
                        <div className="step-form__buttons">
                            <button onClick={() => nextStep(3)} className="btn form-submit-button">Wstecz</button>
                            <button onClick={() => nextStep(4)} className="btn form-submit-button">Dalej</button>
                        </div>
                  
                    </form>
                    
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>       
    )
}

export default SendStep4
