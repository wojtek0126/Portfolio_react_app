import React from 'react';
import SendStep2 from './sendStep2/SendStep2';
import StepsMiddlePart from './sendItemsFragments/StepsMiddlePart';
import StepsTopPart from './sendItemsFragments/StepsTopPart';

const  StepsBase2 = () => {   

    return (
        <div className="steps-container">
         <StepsTopPart homeOrLogin={"notHome"} loggedIn={true}/>  
            <StepsMiddlePart text={`Wszystkie rzeczy do oddania spakuj w 60L worki.
             Dokładną instrukcję jak spakować rzeczy znajdziesz`} link={`TUTAJ.`} />    
            <div className="steps-bottom">          
                 <SendStep2 />
            </div>
        </div>
    )
}

export default StepsBase2