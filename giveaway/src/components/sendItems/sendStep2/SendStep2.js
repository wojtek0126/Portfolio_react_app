import React from 'react';
import Contact from '../../homePage/contact/Contact';
import { Link } from 'react-router-dom';
import BearImage from '../sendItemsFragments/BearImage';
import StepsNavButton from '../sendItemsFragments/StepsNavButton';
import SelectOptionsField from '../sendItemsFragments/SelectOptionsField';

const  SendStep2 = () => {  
  
    return (     
        <>      
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 2/4</p>
                    <form className="step2-form">
                        <p>Podaj liczbę 60l worków, w które spakowałeś rzeczy</p>                          
                           <SelectOptionsField fieldClassName={`step2-form--input`} sNametext={`Liczba 60l worków`}
                           savePoint={`bags`}
                           option1={1}
                           option2={2}
                           option3={3}
                           option4={4}
                           option5={5}
                           />
                           <div className="step-form__buttons">
                            <Link to="/step1">
                                <StepsNavButton text={`Wstecz`} />
                            </Link>
                            <Link to="/step3">
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

export default SendStep2