import React, {useState} from 'react';
import Select from 'react-select'
import { nextStep } from '../../functionsStorage/functions';
import bear from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/bear.jpg'

const  SendStep2 = () => {
    const options = [
        {value: 1, label: 1},
        {value: 2, label: 2},
        {value: 3, label: 3},
        {value: 4, label: 4},
        {value: 5, label: 5}   
    ]

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 2/4</p>
                    <form>
                        <h3>Podaj liczbę 60l worków, w które spakowałeś rzeczy</h3>
                       
                           Liczba 60l worków <Select options={options} />                               
                                       
                           <div className="step-form__buttons">
                            <button onClick={() => nextStep(1)} className="btn form-submit-button">Wstecz</button>
                            <button onClick={() => nextStep(3)} className="btn form-submit-button">Dalej</button>
                        </div>
                    </form>
                    
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>       
    )
}

export default SendStep2