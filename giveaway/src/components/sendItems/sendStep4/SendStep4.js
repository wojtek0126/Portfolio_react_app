import React, {useState} from 'react';
import Select from 'react-select'
import { nextStep } from '../../functionsStorage/functions';
import bear from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/bear.jpg'

const  SendStep4 = () => {  
    const handleChoice = (e) => {     
          localStorage.setItem("street", e.target.value);       
          console.log(e.target.value);       
    }
    const handleChoice2 = (e) => {     
        localStorage.setItem("city", e.target.value);       
        console.log(e.target.value);       
  }
  const handleChoice3 = (e) => {     
    localStorage.setItem("postCode", e.target.value);       
    console.log(e.target.value);       
}
const handleChoice4 = (e) => {     
    localStorage.setItem("tel", e.target.value);       
    console.log(e.target.value);       
}
const handleChoice5 = (e) => {     
    localStorage.setItem("date", e.target.value);       
    console.log(e.target.value);       
}
const handleChoice6 = (e) => {     
    localStorage.setItem("time", e.target.value);       
    console.log(e.target.value);       
}
  const handleChoice7 = (e) => {     
          localStorage.setItem("extraNotes", e.target.value);       
          console.log(e.target.value);       
    }

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
                                        <input type="text" onChange={handleChoice} ></input>
                                    </label>
                                    <label>Miasto
                                        <input type="text" onChange={handleChoice2}></input>
                                    </label>
                                    <label>Kod pocztowy
                                        <input id="zip" name="zip" type="text" pattern="[0-9]*" onChange={handleChoice3}></input>
                                    </label>
                                    <label>Numer telefonu
                                        <input input type="tel" id="phone" name="phone"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            required onChange={handleChoice4}></input>
                                    </label>
                                </div>
                        
                                <div className="step4-form__right">
                                    <p>Termin odbioru:</p>
                                    <label>Data
                                        <input type="date" onChange={handleChoice5}></input>
                                    </label>
                                    <label>Godzina
                                        <input type="time" onChange={handleChoice6}></input>
                                    </label>
                                    <label>Uwagi do kuriera
                                        <textarea onChange={handleChoice7}></textarea>
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
