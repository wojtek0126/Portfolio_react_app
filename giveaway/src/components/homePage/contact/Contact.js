import React, {useState} from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import BackgroundContactForm from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/images/Background-Contact-Form.jpg';
import {sendMessage} from 'C:/CodersLab/Portfolio_react_app/giveaway/src/API/fetch.js';
import {nullifyState} from '../../functionsStorage/functions';


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
            //for claearing fields after submit
            const formNameField = document.getElementById("nameField");
            const formEmailField = document.getElementById("emailField");
            const formMessageField = document.getElementById("messageField");
            console.log(formEmailField);
            //clearing fields after submit
            formNameField.value = "";
            formEmailField.value = "";  
            formMessageField.value = "";   
        
     
        //form validation
        function validateNameInput(nameInput, emailInput, messageInput){
            let str = String(nameInput);            
            for( let i = 0; i < str.length; i++){                     
                if(!isNaN(str.charAt(i)) || str.charAt(i) === "-") {           //if the string is a number, do the following
                    return alert("imię nie może zawierać numerów ani spacji");                    
                }              
            }                     
            if (/[^a-zA-Z0-9\-/]/.test(nameInput)) {
                alert("znaki specjalne niedozwolone");
            }
            else if (messageInput.length <= 1 || nameInput.length <= 1) {
                alert("proszęsię upewnić że wszystkie pola są wypełnione");
            } 
            else if (nameData.length <= 1 || nameData.length > 30 || nameData.includes("/")) {
                alert("imię nie wpisane, za krótkie(conajmniej dwa znaki) lub za długie(max 30 znaków), nie może zawierać znaków specjalnych");
            }            
            else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) || emailInput.length <= 1) {
                alert("nieprawidłowy adres email");
            }           
            //set this to 120         
            else if (messageInput.length < 10) {
                alert("wiadomość za krótka, minimum 120 znaków");
            } 
            //max length message 2000 chars
            else if (messageInput.length > 2000) {
                alert("wiadomość za długa, max 2000 znaków");
            } 
            // else if (/[^a-zA-Z0-9\-\/]/.test(messageInput)) {
            //     console.log("znaki specjalne niedozwolone ze względów bezpieczeństwa, proszę używać wyłącznie liter orza liczb");
            // } 

                                        
            else{
                alert("dane prawidłowe, wysłano wiadomość")
                //sending to API
                sendMessage(newMessage);
            }
            
        }
        validateNameInput(nameData, emailData, messageData);   
        
        // nullify state after submit   
        nullifyState(setNameData);
        nullifyState(setEmailData);
        nullifyState(setMessageData);                 
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
                            <input id="nameField" className="contact-form-input--input" type="name" name="firstName" onChange={handleNameChange}></input>
                            </label>
                        <label className="contact-form-input--label">Wpisz swój email
                            <input id="emailField" className="contact-form-input--input" type="email" onChange={handleEmailChange}></input>
                        </label>                                             
                    </div>      
                    <div className="contact-form-fields">
                    <label className="contact-form-input--label">Wpisz swoją wiadomość
                            <textarea id="messageField" className="contact-form-input--input" onChange={handleMessageChange}></textarea>
                        </label> 
                    </div>                               
                    <button className="btn form-submit-button">Wyślij</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;