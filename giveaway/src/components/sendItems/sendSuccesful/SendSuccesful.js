import React from 'react';
import bear from '../../../assets/images/bear.jpg'
import Decoration from '../../../assets/icons/Decoration.svg';
import Contact from '../../homePage/contact/Contact';
import HomeFooter from '../../homePage/footer/HomeFooter';

const  SendSuccesful = () => {  

    return (   
        <>        
            <div className="step-bottom-container">
                <div className="step-succesful-message">
                  <p className="step-successful-text">Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze</p>
                  <img src={Decoration} alt="decor" className="step-success__decoration" />        
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear" className="steps-bear-img"/>
                </div>
            </div> 
               <Contact />
               <HomeFooter />  
               </>         
    )
}

export default SendSuccesful
