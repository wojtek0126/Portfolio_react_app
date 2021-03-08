import React from 'react';

const InputField2 = ({label, type, onChange, onClick, id, name, classNameLabel,
     classNameInput, value}) => {
    return (
        <label className={classNameLabel}>{label}
            <input className={classNameInput} type={type}
             onChange={onChange} onClick={onClick} id={id} name={name} value={value}></input>           
        </label>
    )
}

export default InputField2;