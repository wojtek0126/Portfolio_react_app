import React from 'react';
import SendSuccesful from './sendSuccesful/SendSuccesful';
import StepsTopPart from './sendItemsFragments/StepsTopPart';

const  StepsBase6 = () => {
  
    return (
        <div className="steps-container">
          <StepsTopPart homeOrLogin={"notHome"} loggedIn={true}/>           
            <div className="steps-bottom">          
                 <SendSuccesful />
            </div>
        </div>
    )
}

export default StepsBase6