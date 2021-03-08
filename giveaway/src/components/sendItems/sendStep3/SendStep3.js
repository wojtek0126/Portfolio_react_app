import React from 'react';
import Contact from '../../homePage/contact/Contact';
import HomeFooter from '../../homePage/footer/HomeFooter';
import {Link} from 'react-router-dom';
import BearImage from '../sendItemsFragments/BearImage';
import StepsRadioButton from '../sendItemsFragments/StepsRadioButton';
import SelectOptionsField from '../sendItemsFragments/SelectOptionsField';
import InputOverrideRadio from '../sendItemsFragments/InputOverrideRadio';
import StepsNavButton from '../sendItemsFragments/StepsNavButton';

const  SendStep3 = () => {      

    return (   
        <>        
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 3/4</p>
                    <form>
                        <p>Lokalizacja:</p>    
                        <SelectOptionsField
                           savePoint={`localization`}
                           option1={`Poznań`}
                           option2={`Warszawa`}
                           option3={`Kraków`}
                           option4={`Wrocław`}
                           option5={`Katowice`}
                           />                   
                            <p className="step3-paragraph">Komu chcesz pomóc?</p>                       
                            <div className="steps-choice-buttons">
                                <StepsRadioButton text={`dzieciom`} id={`dzieciom`} />
                                <StepsRadioButton text={`samotnym matkom`} id={`samotnym matkom`} />
                                <StepsRadioButton text={`bezdomnym`} id={`bezdomnym`} />
                                <StepsRadioButton text={`niepełnosprawnym`} id={`niepełnosprawnym`} />
                                <StepsRadioButton text={`osobom starszym`} id={`osobom starszym`} />                                
                            </div>  
                             <InputOverrideRadio text={`Wpisz nazwę konkretnej organizacji(opcjonalnie)`} />                      
                            <div className="step-form__buttons">
                            <Link to="/step2">
                                <StepsNavButton text={`Wstecz`} />
                            </Link>
                            <Link to="/step4">
                                <StepsNavButton text={`Dalej`} />
                            </Link>                           
                        </div>
                    </form>                    
                </div>
                <BearImage />
            </div>  
            <Contact />
            <HomeFooter />  
            </>     
    )
}

export default SendStep3