import React from 'react';
import SendStep1 from './sendStep1/SendStep1';
import StepsMiddlePart from './sendItemsFragments/StepsMiddlePart';
import StepsTopPart from './sendItemsFragments/StepsTopPart';

const  StepsBase = () => {

    return (
        <div className="steps-container">
            <StepsTopPart homeOrLogin={"notHome"} loggedIn={true}/>      
            <StepsMiddlePart text={`Uzupełnij szczegóły dotyczące Twoich rzeczy. 
            Dzięki temu będziemy wiedzieli komu najlepiej je przekazać.`}/>           
            <div className="steps-bottom">           
                 <SendStep1 />
            </div>
        </div>
    )
}

export default StepsBase