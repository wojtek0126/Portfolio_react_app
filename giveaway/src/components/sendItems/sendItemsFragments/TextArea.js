import React from 'react';
import {handleChoice} from '../../functionsStorage/functions';

const TextArea = ({label, savePoint}) => {
    return (
        <label className="step4-label">{label}
            <textarea onChange={handleChoice(savePoint)}></textarea>
        </label>  
    )
}

export default TextArea;