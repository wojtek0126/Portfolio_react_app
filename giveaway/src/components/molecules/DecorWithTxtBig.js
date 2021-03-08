import React from 'react';
import DecorationBig from '../atoms/commonIcons/DecorationBig';

const DecorWithTxtBig = ({text}) => {

    return (
        <>
        <p className="step-successful-text">{text}</p>
        <DecorationBig />    
        </>
    )
}

export default DecorWithTxtBig;