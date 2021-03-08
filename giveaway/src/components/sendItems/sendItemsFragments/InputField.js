import React from 'react';
import {handleChoice} from '../../functionsStorage/functions';

const InputField = ({label, type, savePoint, pattern}) => {
    return (
        <label className="step4-label">{label}
            <input type={type} onChange={handleChoice(savePoint)} pattern={pattern}></input>
        </label>
    )
}

export default InputField;