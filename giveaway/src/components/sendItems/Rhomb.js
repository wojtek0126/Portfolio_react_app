import React from 'react';

const Rhomb = ({number, textRhomb}) => {
    return (
        <div className="rhomb-container">
            <div className="rhomb-content">
                <p>{number}</p>
                <span>{textRhomb}</span>
            </div>
            
        </div>
    )
}

export default Rhomb