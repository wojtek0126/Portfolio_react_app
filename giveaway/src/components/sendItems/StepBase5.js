import React from 'react';
import SendSummary from './sendSummary/SendSummary';
import StepsTopPart from './sendItemsFragments/StepsTopPart';

const  StepsBase5 = () => {

    return (
        <div className="steps-container">
        <StepsTopPart homeOrLogin={"notHome"} loggedIn={true}/>           
            <div className="steps-bottom">            
                 <SendSummary />
            </div>
        </div>
    )
}

export default StepsBase5