import React from 'react';
import { nextStep, handleRadioChoice } from '../../functionsStorage/functions';
import bear from '../../../assets/images/bear.jpg'
import Contact from '../../homePage/contact/Contact';
import HomeFooter from '../../homePage/footer/HomeFooter';

const  SendStep1 = () => {
    //local storage item check in console
    console.log(localStorage.getItem("step"));    

    return (   
        <>        
            <div className="step-bottom-container container-full">
                <div className="step-bottom-left">
                    <p>Krok 1/4</p>
                    <form>                        
                        <p>Zaznacz co chcesz oddać</p>
                        <label>
                            <input type="radio" name="radio"  id="ubrania, które nadają się do ponownego użycia" onChange={handleRadioChoice(`step`)}></input>ubrania, które nadają się do ponownego użycia
                        </label>
                        <label>
                            <input type="radio" name="radio" id="ubrania do wyrzucenia" onChange={handleRadioChoice(`step`)}></input>ubrania do wyrzucenia
                        </label>
                        <label>     
                        <input type="radio" name="radio" id="zabawki" onChange={handleRadioChoice(`step`)}></input>zabawki 
                        </label>
                        <label>
                        <input type="radio" name="radio" id="książki"onChange={handleRadioChoice(`step`)}></input>książki
                        </label>
                        <label>
                        <input type="radio" name="radio" id="inne" onChange={handleRadioChoice(`step`)}></input>inne
                        </label>                          
                        <button className="btn steps-button" onClick={() => nextStep(2)} >Dalej</button>
                    </form>                    
                </div>
                <div className="step-bottom-right">
                    <img className="container-full" src={bear} alt="bear"/>
                </div>
                    
            </div>   
            <Contact />
            <HomeFooter />
            </>    
    )
}

export default SendStep1