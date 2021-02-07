import React, {useState} from 'react';
import Decoration from '../../../assets/icons/Decoration.svg';
import BackgroundContactForm from '../../../assets/images/Background-Contact-Form.jpg';
import {handleMessageSubmit, handleValueInput} from '../../functionsStorage/functions';
import { sendMessage } from '../../../API/fetch';

const Contact = () => {
    let [nameData, setNameData] = useState([]);
    let [emailData, setEmailData] = useState([]);
    let [messageData, setMessageData] = useState([]);     

    return (
        <div className="contact-container container-full" id="contact">
            <div className="contact-left-side">
                <img className="contact-left-side__image" src={BackgroundContactForm} alt="form-background"/>                
            </div>
            <div className="contact-right-side">
                <p className="about-decorated-text--large">Skontaktuj się z nami</p>
                    <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                <form className="contact-form" onSubmit={handleMessageSubmit(nameData, emailData, messageData,
                                                                            `nameField`, `emailField`, `messageField`, 
                                                                             sendMessage,
                                                                             setNameData, setEmailData, setMessageData)}>
                    <div className="contact-form-fields">
                        <label className="contact-form-input--label">Wpisz swoje imię
                            <input id="nameField" className="contact-form-input--input" type="name" name="firstName" onChange={handleValueInput(setNameData)}></input>
                            </label>
                        <label className="contact-form-input--label">Wpisz swój email
                            <input id="emailField" className="contact-form-input--input" type="email" onChange={handleValueInput(setEmailData)}></input>
                        </label>                                             
                    </div>      
                    <div className="contact-form-fields">
                    <label className="contact-form-input--label">Wpisz swoją wiadomość
                            <textarea id="messageField" className="contact-form-input--input" onChange={handleValueInput(setMessageData)}></textarea>
                        </label> 
                    </div>                               
                    <button className="btn form-submit-button">Wyślij</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;