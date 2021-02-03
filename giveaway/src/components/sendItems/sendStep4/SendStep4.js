import React from 'react';
import { handleChoice, nextStep } from '../../functionsStorage/functions';
import bear from '../../../assets/images/bear.jpg'

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
                                        <input type="text" onChange={handleChoice("street")} ></input>
                                    </label>
                                    <label>Miasto
                                        <input type="text" onChange={handleChoice("city")}></input>
                                    </label>
                                    <label>Kod pocztowy
                                        <input id="zip" name="zip" type="text" pattern="[0-9]*" onChange={handleChoice("postCode")}></input>
                                    </label>
                                    <label>Numer telefonu
                                        <input input type="tel" id="phone" name="phone"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            required onChange={handleChoice("tel")}></input>
                                    </label>
                                </div>                        
                                <div className="step4-form__right">
                                    <p>Termin odbioru:</p>
                                    <label>Data
                                        <input type="date" onChange={handleChoice("date")}></input>
                                    </label>
                                    <label>Godzina
                                        <input type="time" onChange={handleChoice("time")}></input>
                                    </label>
                                    <label>Uwagi do kuriera
                                        <textarea onChange={handleChoice("extraNotes")}></textarea>
                                    </label>                                    
                                </div>  
                            </div>                                     
                        <div className="step-form__buttons">
                            <button onClick={() => nextStep(3)} className="btn form-submit-button">Wstecz</button>
                            <button onClick={() => nextStep(5)} className="btn form-submit-button">Dalej</button>
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
