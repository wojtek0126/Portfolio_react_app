import React from 'react';
import SendStep3 from './sendStep3/SendStep3';
import StepsMiddlePart from './sendItemsFragments/StepsMiddlePart';
import StepsTopPart from './sendItemsFragments/StepsTopPart';

const  StepsBase3 = () => {

    return (
        <div className="steps-container">
         <StepsTopPart homeOrLogin={"notHome"} loggedIn={true}/>  
            <StepsMiddlePart text={`Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
                     filtrować organizacje po ich lokalizacji bądź celu ich pomocy.`} />          
            <div className="steps-bottom">             
                 <SendStep3 />
            </div>
        </div>
    )
}

export default StepsBase3