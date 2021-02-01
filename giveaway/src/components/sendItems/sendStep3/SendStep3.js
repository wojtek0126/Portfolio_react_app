import React, {useState} from 'react';
import Select from 'react-select'
import { nextStep } from '../../functionsStorage/functions';
import bear from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/bear.jpg'

const  SendStep3 = () => {
    const options = [
        {value: "Poznań", label: "Poznań"},
        {value: "Warszawa", label: "Warszawa"},
        {value: "Kraków", label: "Kraków"},
        {value: "Wrocław", label: "Wrocław"},
        {value: "Katowice", label: "Katowice"}   
    ]

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 3/4</p>
                    <form>
                        <h3>Lokalizacja:</h3>
                       
                            <Select options={options} />      

                             <h4>Komu chcesz pomóc?</h4>
                       
                            <div className="steps-choice-buttons">
                                <button>dzieciom</button>    
                                <button>samotnym matkom</button> 
                                <button>bezdomnym</button> 
                                <button>niepełnosprawnym</button> 
                                <button>osobom starszym</button> 
                            </div>                

                        <h4> Wpisz nazwę konkretnej organizacji(opcjonalnie)
                            <input type="text"></input>
                        </h4>
                        <div className="step-form__buttons">
                            <button onClick={() => nextStep(2)} className="btn form-submit-button">Wstecz</button>
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

export default SendStep3