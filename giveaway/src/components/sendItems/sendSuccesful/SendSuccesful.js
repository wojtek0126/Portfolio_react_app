import React from 'react';
import Contact from '../../homePage/contact/Contact';
import DecorWithTxtBig from '../../molecules/DecorWithTxtBig';
import BearImage from '../sendItemsFragments/BearImage';

const  SendSuccesful = () => {  

    return (   
        <>        
            <div className="step-bottom-container">
                <div className="step-succesful-message">                  
                  <DecorWithTxtBig text={`Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze`} />  
                </div>
            <BearImage />
            </div> 
               <Contact />            
               </>         
    )
}

export default SendSuccesful
