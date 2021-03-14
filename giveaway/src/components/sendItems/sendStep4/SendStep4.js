import React from 'react';
import Contact from '../../homePage/contact/Contact';
import {Link} from 'react-router-dom';
import BearImage from '../sendItemsFragments/BearImage';
import StepsNavButton from '../sendItemsFragments/StepsNavButton';import InputField from '../sendItemsFragments/InputField';
import TextArea from '../sendItemsFragments/TextArea';

const  SendStep4 = () => {  

    return (   
        <>        
            <div className="step-bottom-container">
                <div className="step4-bottom-left">
                    <p>Krok 4/4</p>
                    <form>
                        <p>Podaj adres oraz termin odbiorurzeczy przez kuriera</p>                              
                        <div className="step4-form__container">
                            <div className="step4-form__left">
                                <span className="step3-paragraph">Adres odbioru:</span>                            
                                    <InputField label={`Ulica`} type={"text"} savePoint={"street"} />                             
                                    <InputField label={`Miasto`} type={"text"} savePoint={"city"} />                            
                                    <InputField label={`Kod pocztowy`} type={"text"} savePoint={"postCode"} pattern={"[0-9]*"} />                               
                                    <InputField label={`Numer telefonu`} type={"tel"} savePoint={"tel"} pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"} />
                                </div>                        
                                <div className="step4-form__right">
                                    <span className="step3-paragraph">Termin odbioru:</span>                                 
                                    <InputField label={`Data`} type={"date"} savePoint={"date"} />                                   
                                    <InputField label={`Godzina`} type={"time"} savePoint={"time"} />                                  
                                    <TextArea label={`Uwagi do kuriera`} savePoint={"extraNotes"} />                                  
                                </div>  
                            </div>                                     
                        <div className="step-form__buttons">
                        <Link to="/step3">
                            <StepsNavButton text={`Wstecz`} />
                        </Link>
                        <Link to="/stepSummary">
                            <StepsNavButton text={`Dalej`} />
                        </Link>                       
                        </div>                  
                    </form>                    
                </div>
              <BearImage />
            </div>  
               <Contact />           
               </>        
    )
}

export default SendStep4
