import React from 'react';
import {handleChoice} from '../../functionsStorage/functions';

const SelectOptionsField = ({text, savePoint, option1, option2, option3, option4, option5, fieldClassName}) => {
    return (
        <label>{text}
<select   onChange={handleChoice(savePoint)}>
                 <option className={fieldClassName}>{option1}</option>
                 <option className={fieldClassName}>{option2}</option>
                 <option className={fieldClassName}>{option3}</option>
                 <option className={fieldClassName}>{option4}</option>
                 <option className={fieldClassName}>{option5}</option>
             </select>
    </label>  
    )
}

export default SelectOptionsField;




