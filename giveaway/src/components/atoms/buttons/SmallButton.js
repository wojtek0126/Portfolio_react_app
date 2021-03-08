import React from 'react';

const SmallButton = ({text, onClick}) => {
    return (
        <button className="btn form-submit-button yellow-hover-btn" onClick={onClick} >{text}</button>
    )
}

export default SmallButton;