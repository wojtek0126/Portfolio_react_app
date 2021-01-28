import React, {useState, useEffect} from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import BackgroundContactForm from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/Background-Contact-Form.jpg';
import {sendMessage} from 'C:/CodersLab/Portfolio_react_app/giveaway/src/API/fetch.js';


const Contact = () => {
    let [nameData, setNameData] = useState([]);
    let [emailData, setEmailData] = useState([]);
    let [messageData, setMessageData] = useState([]); 

    const handleSubmit = (e) => {
        e.preventDefault();       
        const newMessage = {           
            name: nameData,
            email: emailData,
            message: messageData           
        };   
        //form validation
        function validateNameInput(nameInput, emailInput, messageInput){
            let str = String(nameInput);
            let isNumberOrSpecial = false;
            for( let i = 0; i < str.length; i++){                     
                if(!isNaN(str.charAt(i)) || str.charAt(i) === "-") {           //if the string is a number, do the following
                    return alert("imię nie może zawierać numerów ani spacji");
                    isNumberOrSpecial = true;
                }              
            }
            if (/[^a-zA-Z0-9\-\/]/.test(nameInput)) {
                alert("znaki specjalne niedozwolone");
            }
            else if (nameData.length <= 1 || nameData.length > 30 || nameData.includes("/")) {
                alert("imię nie wpisane, za krótkie(conajmniej dwa znaki) lub za długie(max 30 znaków), nie może zawierać znaków specjalnych");
            }  
            else if (messageInput.length === 0) {
                alert("wiadomość pusta");
            }             
            else if (messageInput.length < 120) {
                alert("wiadomość za krótka, minimum 120 znaków");
            } 
            //in case if necessary this is basic injection security measure, could exclude ", . !"
            // else if (/[^a-zA-Z0-9\-\/]/.test(messageInput)) {
            //     console.log("znaki specjalne niedozwolone ze względów bezpieczeństwa, proszę używać wyłącznie liter orza liczb");
            // } 
            else if (emailInput.length === 0) {
                alert("nie wpisano adresu email");
            }                                
            else{
                alert("dane prawidłowe, wysłano wiadomość")
                sendMessage(newMessage);
            }
        }
        validateNameInput(nameData, emailData, messageData);       
    }

    const handleNameChange = (e) => {
        
        console.log(e.target.value);
        setNameData(e.target.value)
    }
    const handleEmailChange = (e) => {
     
        console.log(e.target.value);
        setEmailData(e.target.value)
    }
    const handleMessageChange = (e) => {
    
        console.log(e.target.value);
        setMessageData(e.target.value)
    }    

    return (
        <div className="contact-container" id="contact">
            <div className="contact-left-side">
                <img className="contact-left-side__image" src={BackgroundContactForm} alt="form-background"/>                
            </div>
            <div className="contact-right-side">
                <p>Skontaktuj się z nami</p>
                    <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form-fields">
                        <label className="contact-form-input--label">Wpisz swoje imię
                            <input className="contact-form-input--input" type="name" name="firstName" onChange={handleNameChange}></input>
                            </label>
                        <label className="contact-form-input--label">Wpisz swój email
                            <input className="contact-form-input--input" type="email" onChange={handleEmailChange}></input>
                        </label>                                             
                    </div>      
                    <div className="contact-form-fields">
                    <label className="contact-form-input--label">Wpisz swoją wiadomość
                            <textarea className="contact-form-input--input" onChange={handleMessageChange}></textarea>
                        </label> 
                    </div>                               
                    <button className="btn form-submit-button"  >Wyślij</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;