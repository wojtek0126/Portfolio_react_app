import React from 'react';
import { nextStep, handleChoice, handleRadioChoice, handleOverrideRadioWithText } from '../../functionsStorage/functions';
import bear from '../../../assets/images/bear.jpg'

const  SendStep3 = () => {     

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 3/4</p>
                    {/* <form> */}
                        <h3>Lokalizacja:</h3>                       
                            <select onChange={handleChoice(`localization`)}>
                                <option>Poznań</option>
                                <option>Warszawa</option>
                                <option>Kraków</option>
                                <option>Wrocław</option>
                                <option>Katowice</option>
                            </select>
                             <h4>Komu chcesz pomóc?</h4>                       
                            <div className="steps-choice-buttons">
                                <button type="radio" name="radio" id="dzieciom" onClick={handleRadioChoice("receiver")}>dzieciom</button>    
                                <button  type="radio" name="radio" id="samotnym matkom" onClick={handleRadioChoice("receiver")}>samotnym matkom</button> 
                                <button  type="radio" name="radio" id="bezdomnym" onClick={handleRadioChoice("receiver")}>bezdomnym</button> 
                                <button  type="radio" name="radio" id="niepełnosprawnym" onClick={handleRadioChoice("receiver")}>niepełnosprawnym</button> 
                                <button  type="radio" name="radio" id="osobom starszym" onClick={handleRadioChoice("receiver")}>osobom starszym</button> 
                            </div>   
                        <h4> Wpisz nazwę konkretnej organizacji(opcjonalnie)
                            <input type="text" onChange={handleOverrideRadioWithText(`receiver`)}></input>
                        </h4>
                <div className="step-form__buttons">
                            <button onClick={() => nextStep(2)} className="btn form-submit-button">Wstecz</button>
                            <button onClick={() => nextStep(4)} className="btn form-submit-button">Dalej</button>
                        </div>
                    {/* </form> */}                    
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>       
    )
}

export default SendStep3