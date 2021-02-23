import React from 'react';

const StepsMiddlePart = ({text, link}) => {

    return (
        <div className="steps-middle ">
            <h1>Ważne!</h1>
            <h3>{text} <a href="">{link}</a></h3>
        </div>
    )
}

export default StepsMiddlePart;