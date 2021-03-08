import React from 'react';
import bear from '../../../assets/images/bear.jpg'

const BearImage = () => {

    return (
        <div className="step-bottom-right">
            <img className="container-full" src={bear} alt="bear" className="steps-bear-img"/>
        </div>
    )
}

export default BearImage;