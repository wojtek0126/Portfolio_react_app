import React from 'react';
import { handleOverrideRadioWithText } from '../../functionsStorage/functions';


const InputOverrideRadio = ({text}) => {
    return (
        <p className="step3-paragraph-with-input">{text}
            <input type="text" onChange={handleOverrideRadioWithText(`receiver`)}></input>
        </p> 
    )
}

export default InputOverrideRadio;




