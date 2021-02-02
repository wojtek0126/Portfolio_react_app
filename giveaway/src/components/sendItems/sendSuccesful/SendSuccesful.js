import React, {useState} from 'react';
import Select from 'react-select'
import { nextStep } from '../../functionsStorage/functions';
import bear from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/bear.jpg'
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';

const  SendSuccesful = () => {  

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                  <p>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze</p>
                  <img src={Decoration} alt="decor" className="header-right-side--content__decoration" />
                           
                                     
                        {/* <div className="step-form__buttons">
                            <button onClick={() => nextStep(3)} className="btn form-submit-button">Wstecz</button>
                            <button onClick={() => nextStep(5)} className="btn form-submit-button">Dalej</button>
                        </div> */}
                  
                   
                    
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>       
    )
}

export default SendSuccesful
