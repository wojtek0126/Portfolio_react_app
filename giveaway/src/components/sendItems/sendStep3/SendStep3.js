import React, {useState} from 'react';
import Select from 'react-select'
import { nextStep } from '../../functionsStorage/functions';
import bear from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/bear.jpg'

const  SendStep3 = () => {
    // const options = [
    //     {value: "Poznań", label: "Poznań"},
    //     {value: "Warszawa", label: "Warszawa"},
    //     {value: "Kraków", label: "Kraków"},
    //     {value: "Wrocław", label: "Wrocław"},
    //     {value: "Katowice", label: "Katowice"}   
    // ]

    const handleChoice = (e) => {
        localStorage.setItem("localization", e.target.value);       
        console.log(e.target.value);
      }
      const handleChoice2 = (e) => {
        localStorage.setItem("receiver", e.target.id);       
        console.log(e.target.id);
      }
      const handleChoice3 = (e) => {
          if (e.target.value != null) {
            localStorage.setItem("receiver", e.target.value);       
            console.log(e.target.value);
          }       
      }
     

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 3/4</p>
                    {/* <form> */}
                        <h3>Lokalizacja:</h3>
                       
                            {/* <Select options={options} />       */}
                            <select onChange={handleChoice}>
                                <option>Poznań</option>
                                <option>Warszawa</option>
                                <option>Kraków</option>
                                <option>Wrocław</option>
                                <option>Katowice</option>
                            </select>

                             <h4>Komu chcesz pomóc?</h4>
                       
                            <div className="steps-choice-buttons">
                                <button type="radio" name="radio" id="dzieciom" onClick={handleChoice2}>dzieciom</button>    
                                <button  type="radio" name="radio" id="samotnym matkom" onClick={handleChoice2}>samotnym matkom</button> 
                                <button  type="radio" name="radio" id="bezdomnym" onClick={handleChoice2}>bezdomnym</button> 
                                <button  type="radio" name="radio" id="niepełnosprawnym" onClick={handleChoice2}>niepełnosprawnym</button> 
                                <button  type="radio" name="radio" id="osobom starszym" onClick={handleChoice2}>osobom starszym</button> 
                            </div>                

                        <h4> Wpisz nazwę konkretnej organizacji(opcjonalnie)
                            <input type="text" onChange={handleChoice3}></input>
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