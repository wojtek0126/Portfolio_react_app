import React from 'react';
import SendStep4 from './sendStep4/SendStep4';
import StepsMiddlePart from './sendItemsFragments/StepsMiddlePart';
import StepsTopPart from './sendItemsFragments/StepsTopPart';

const  StepsBase4 = () => {

    return (
        <div className="steps-container">
          <StepsTopPart homeOrLogin={"notHome"} loggedIn={true}/>  
            <StepsMiddlePart text={`Podaj adres oraz termin odbioru rzeczy.`}/>            
            <div className="steps-bottom">            
                 <SendStep4 />
            </div>
        </div>
    )
}

export default StepsBase4