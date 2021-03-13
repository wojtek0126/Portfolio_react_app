import React, {useState} from 'react';
import {handleMessageSubmit, handleValueInput} from '../../functionsStorage/functions';
import {sendMessage} from '../../../API/fetch';
import SmallButton from '../../atoms/buttons/SmallButton';
import ContactFormImage from '../homePageFragments/ContactFormImage';
import LargeTxtWithDecor from '../homePageFragments/LargeTxtWithDecor';
import InputField2 from '../../atoms/formElements/InputField2';
import TextArea2 from '../../atoms/formElements/Textarea2';
import HomeFooter from '../footer/HomeFooter';

const Contact = () => {
    let [nameData, setNameData] = useState([]);
    let [emailData, setEmailData] = useState([]);
    let [messageData, setMessageData] = useState([]);     

    return (
        <div className="contact-container container-full" id="contact">
            <div className="contact-left-side">
              <ContactFormImage />             
            </div>
            <div className="contact-right-side">               
                 <LargeTxtWithDecor text={`Skontaktuj się z nami`} className={`decorated-text--large`}
                 wrapperClass={`header-right-side--content__text contact-paragraph-above-decor`} />
                <form className="contact-form" onSubmit={handleMessageSubmit(nameData, emailData, messageData,
                                                                            `nameField`, `emailField`, `messageField`, 
                                                                             sendMessage,
                                                                             setNameData, setEmailData, setMessageData)}>
                    <div className="contact-form-fields">
                        <InputField2 id={"nameField"} classNameLabel={"contact-form-input--label"} label={`Wpisz swoje imię`}
                         classNameInput={"contact-form-input--input"} type={"name"} name={`firstName`} onChange={handleValueInput(setNameData)} />                     
                        <InputField2 id={"emailField"} classNameLabel={"contact-form-input--label"} label={`Wpisz swój email`}
                         classNameInput={"contact-form-input--input"} type={"email"} onChange={handleValueInput(setEmailData)} />                                            
                    </div>      
                    <div className="contact-form-fields">                  
                        <TextArea2 id={"messageField"} label={`Wpisz swoją wiadomość`}
                         classNameLabel={"contact-form-input--label"} classNameInput={"contact-form-input--input"} onChange={handleValueInput(setMessageData)} />
                    </div>                               
                    <SmallButton text={`Wyślij`} />
                </form>
            </div>
            <HomeFooter />
        </div>
    )
}

export default Contact;