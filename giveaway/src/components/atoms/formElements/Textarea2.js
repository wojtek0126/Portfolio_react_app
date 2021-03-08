import React from 'react';

const TextArea2 = ({label, id, onChange, classNameLabel, classNameInput}) => {
    return (
        <label className={classNameLabel}>{label}
            <textarea id={id} className={classNameInput} onChange={onChange}></textarea>
        </label> 
    )
}

export default TextArea2;