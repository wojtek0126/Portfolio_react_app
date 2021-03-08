import React from 'react';
import {handleRadioChoice2} from '../../functionsStorage/functions';

const StepsRadioButton = ({text, id}) => {
    return (       
        <button className="choice-button btn yellow-hover-btn"
         type="radio" name="radio" id={id} onClick={handleRadioChoice2("receiver")}>{text}</button>         
    )
}

export default StepsRadioButton;