import React from 'react';
import { nextStep, handleChoice, handleOverrideRadioWithText, handleRadioChoice2, fetchSetStep, setStep } from '../../functionsStorage/functions';
import bear from '../../../assets/images/bear.jpg'
import Contact from '../../homePage/contact/Contact';
import HomeFooter from '../../homePage/footer/HomeFooter';
import { Link } from 'react-router-dom';

const  SendStep3 = () => {   
     

    return (   
        <>        
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 3/4</p>
                    <form>
                        <p>Lokalizacja:</p>                       
                            <select onChange={handleChoice(`localization`)}>
                                <option>Poznań</option>
                                <option>Warszawa</option>
                                <option>Kraków</option>
                                <option>Wrocław</option>
                                <option>Katowice</option>
                            </select>
                             <p className="step3-paragraph">Komu chcesz pomóc?</p>                       
                            <div className="steps-choice-buttons">
                                <button className="choice-button btn yellow-hover-btn" type="radio" name="radio" id="dzieciom" onClick={handleRadioChoice2("receiver")}>dzieciom</button>    
                                <button className="choice-button btn yellow-hover-btn" type="radio" name="radio" id="samotnym matkom" onClick={handleRadioChoice2("receiver")}>samotnym matkom</button> 
                                <button className="choice-button btn yellow-hover-btn" type="radio" name="radio" id="bezdomnym" onClick={handleRadioChoice2("receiver")}>bezdomnym</button> 
                                <button className="choice-button btn yellow-hover-btn" type="radio" name="radio" id="niepełnosprawnym" onClick={handleRadioChoice2("receiver")}>niepełnosprawnym</button> 
                                <button className="choice-button btn yellow-hover-btn" type="radio" name="radio" id="osobom starszym" onClick={handleRadioChoice2("receiver")}>osobom starszym</button> 
                            </div>   
                        <p className="step3-paragraph-with-input"> Wpisz nazwę konkretnej organizacji(opcjonalnie)
                            <input type="text" onChange={handleOverrideRadioWithText(`receiver`)}></input>
                        </p>
                <div className="step-form__buttons">
                <Link to="/step2">
                    <button className="btn steps-button yellow-hover-btn">Wstecz</button>
                </Link>
                <Link to="/step4">
                    <button className="btn steps-button yellow-hover-btn">Dalej</button>
                </Link>                           
                        </div>
                    </form>                    
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

export default SendStep3