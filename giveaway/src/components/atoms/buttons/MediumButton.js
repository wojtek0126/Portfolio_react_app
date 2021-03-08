import React from 'react';

const MediumButton = ({text, onClick, id}) => {
    return (
        <button className="btn who-we-help--button yellow-hover-btn" onClick={onClick} id={id}>{text}</button>
    )
}

export default MediumButton;