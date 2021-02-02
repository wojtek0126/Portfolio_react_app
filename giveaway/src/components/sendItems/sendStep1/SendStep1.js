import React, {useState} from 'react';
import { nextStep } from '../../functionsStorage/functions';
import bear from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/bear.jpg'

const  SendStep1 = () => {
    console.log(localStorage.getItem("step"));    

    const handleChoice = (e) => {
      localStorage.setItem("itemName", e.target.id);
      console.log(e.target.id);
    }

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 1/4</p>
                    <form>
                        
                        <h3>Zaznacz co chcesz oddać</h3>
                        <label>
                            <input type="radio" name="radio"  id="ubrania, które nadają się do ponownego użycia" onChange={handleChoice}></input>ubrania, które nadają się do ponownego użycia
                        </label>
                        <label>
                            <input type="radio" name="radio" id="ubrania do wyrzucenia" onChange={handleChoice}></input>ubrania do wyrzucenia
                        </label>
                        <label>     
                        <input type="radio" name="radio" id="zabawki" onChange={handleChoice}></input>zabawki 
                        </label>
                        <label>
                        <input type="radio" name="radio" id="książki"onChange={handleChoice}></input>książki
                        </label>
                        <label>
                        <input type="radio" name="radio" id="inne" onChange={handleChoice}></input>inne
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