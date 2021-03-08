import React from 'react';
import Rhomb from './Rhomb';

const FourRhombs = () => {
    return (
        <div className="steps-right-side--content__rhombs">
            <Rhomb number={1} textRhomb={"Wybierz rzeczy"} />
            <Rhomb number={2} textRhomb={"Spakuj je w worki"}/>
            <Rhomb number={3} textRhomb={"Wybierz fundację"} />
            <Rhomb number={4} textRhomb={"Zamów kuriera"} />
        </div>
    )
}

export default FourRhombs;