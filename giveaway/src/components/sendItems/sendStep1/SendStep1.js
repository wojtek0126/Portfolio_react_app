import React, {useState} from 'react';
import { nextStep, handleRadioChoice } from '../../functionsStorage/functions';
import bear from '../../../assets/images/bear.jpg'

const  SendStep1 = () => {
    console.log(localStorage.getItem("step"));    

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 1/4</p>
                    <form>
                        
                        <h3>Zaznacz co chcesz oddać</h3>
                        <label>
                            <input type="radio" name="radio"  id="ubrania, które nadają się do ponownego użycia" onChange={handleRadioChoice(`step`)}></input>ubrania, które nadają się do ponownego użycia
                        </label>
                        <label>
                            <input type="radio" name="radio" id="ubrania do wyrzucenia" onChange={handleRadioChoice(`step`)}></input>ubrania do wyrzucenia
                        </label>
                        <label>     
                        <input type="radio" name="radio" id="zabawki" onChange={handleRadioChoice(`step`)}></input>zabawki 
                        </label>
                        <label>
                        <input type="radio" name="radio" id="książki"onChange={handleRadioChoice(`step`)}></input>książki
                        </label>
                        <label>
                        <input type="radio" name="radio" id="inne" onChange={handleRadioChoice(`step`)}></input>inne
                        </label>  
                        
                        <button onClick={() => nextStep(2)} className="btn form-submit-button">Dalej</button>
                    </form>
                    
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>       
    )
}

export default SendStep1