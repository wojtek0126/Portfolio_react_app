import React from 'react';
import {handleRadioChoice2} from '../../functionsStorage/functions';

const StepsEmptyRadioBtn = ({text}) => {
    return (
        <label>
            <button className="radio-choice-button yellow-hover-btn" onClick={handleRadioChoice2(`step`)}></button>{text}
        </label>
    )
}

export default StepsEmptyRadioBtn;