import React from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import BackgroundContactForm from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/Background-Contact-Form.jpg';

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-left-side">
                <img className="contact-left-side__image" src={BackgroundContactForm} alt="form-background"/>                
            </div>
            <div className="contact-right-side">
                <p>Skontaktuj się z nami</p>
                    <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                <form className="contact-form">
                    <div className="contact-form-fields">
                        <label className="contact-form-input--label">Wpisz swoje imię
                            <input className="contact-form-input--input" type="name"></input>
                            </label>
                        <label className="contact-form-input--label">Wpisz swój email
                            <input className="contact-form-input--input" type="email"></input>
                        </label>                                             
                    </div>      
                    <div className="contact-form-fields">
                    <label className="contact-form-input--label">Wpisz swoją wiadomość
                            <textarea className="contact-form-input--input"></textarea>
                        </label> 
                    </div>                               
                    <button className="btn form-submit-button" type="submit">Wyślij</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;