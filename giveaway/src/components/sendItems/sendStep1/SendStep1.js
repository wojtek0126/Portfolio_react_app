import React from 'react';
import Contact from '../../homePage/contact/Contact';
import HomeFooter from '../../homePage/footer/HomeFooter';
import {Link} from 'react-router-dom';
import BearImage from '../sendItemsFragments/BearImage';
import StepsEmptyRadioBtn from '../sendItemsFragments/StepsEmptyRadioBtn';
import StepsNavButton from '../sendItemsFragments/StepsNavButton';

const  SendStep1 = () => {
  
    return (   
        <>        
            <div className="step-bottom-container container-full">
                <div className="step-bottom-left">
                    <p>Krok 1/4</p>
                    <form className="step1-form">                        
                        <p>Zaznacz co chcesz oddać</p>                         
                        <StepsEmptyRadioBtn text={`ubrania, które nadają się do ponownego użycia`}/>                        
                        <StepsEmptyRadioBtn  text={`ubrania do wyrzucenia`}/>                
                        <StepsEmptyRadioBtn  text={`zabawki `}/>              
                        <StepsEmptyRadioBtn  text={`książki`}/>                
                        <StepsEmptyRadioBtn  text={`inne`}/>               
                        <Link to="/step2">                         
                             <StepsNavButton text={`Dalej`} />
                        </Link>                          
                    </form>                    
                </div>
              <BearImage />                    
            </div>   
            <Contact />
            <HomeFooter />
            </>    
    )
}

export default SendStep1