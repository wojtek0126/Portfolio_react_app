import React, {useState} from 'react';
import Select from 'react-select'
import { nextStep } from '../../functionsStorage/functions';
import bear from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/bear.jpg'

const  SendStep2 = () => {
    // const options = [
    //     {value: 1, label: 1},
    //     {value: 2, label: 2},
    //     {value: 3, label: 3},
    //     {value: 4, label: 4},
    //     {value: 5, label: 5}   
    // ]

    const handleChoice = (e) => {
        let value1 = e.target.value
        localStorage.setItem("bags", value1);
        console.log(e.target.value);
      }

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 2/4</p>
                    {/* <form> */}
                        <h3>Podaj liczbę 60l worków, w które spakowałeś rzeczy</h3>
                       
                           {/* Liczba 60l worków <Select options={options} onChange={handleChoice} />                                */}
                           Liczba 60l worków  <select  onChange={handleChoice}>
                                           <option>1</option>
                                           <option>2</option>
                                           <option>3</option>
                                           <option>4</option>
                                           <option>5</option>
                                       </select>
                           <div className="step-form__buttons">
                            <button onClick={() => nextStep(1)} className="btn form-submit-button">Wstecz</button>
                            <button onClick={() => nextStep(3)} className="btn form-submit-button">Dalej</button>
                        </div>
                    {/* </form> */}
                    
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>       
    )
}

export default SendStep2