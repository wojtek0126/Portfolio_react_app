import { postRegister, setLoggedFetch, setStepFetch } from "../../API/fetch";

//nullify state array after submit for submitHandlers in forms
export const nullifyState = (setStateToClear) => {
    setTimeout(() => {
        setStateToClear([]);
    },0);      
}

//nullify state string after submit for submitHandlers in forms
export const nullifyStateString = (setStateToClear) => {
    setTimeout(() => {
        setStateToClear("");
    },0);      
}

//clear inner text from inputs mainly after sub attempts of forms, apply to input fields
export const nullifyInputValue = (targetName) => {    
       targetName.value = "";    
}

//change selected element's color. for borders
export const switchBorderColor = (targetName, newColor) => {    
    targetName.style.borderColor = newColor;    
}

//compare two strings
export const compareTwoStrings = (string1, string2) => {
    let result = string1.localeCompare(string2);
    if (result === 0) {
        return true
    }
    else {
        return false
    }
}

// check if user logged in by local storage
export const loginCheckForMenuView = (localStorageitem) => {  
    let value = localStorage.getItem(localStorageitem)       
    if (value === "true" || value === true ) {
        return true;
    }
    else {
        return false;
    }   
}

//switch to next step in simple steps
// export const nextStep = (nextStepNumber) => {
//     setStepFetch(nextStepNumber);
//     window.location.reload();
// }

//pagination
export const setPageNumbers = (orgType, orgsPerpage) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(orgType.length / orgsPerpage); i++) {
        pageNumbers.push(i);  
    }
    return pageNumbers;
}
  
// prep for pagination
export const preparedForPagination = (list, currentPage, numberPerPage) => {
    const indexOfLastOrg = currentPage * numberPerPage;
    const indexOfFirstOrg = indexOfLastOrg - numberPerPage;
    const currentOrgs = list.slice(indexOfFirstOrg, indexOfLastOrg);
    return currentOrgs
}; 
// showor hide pagination
export const showHidePagination = (targetId, displayStyle) => {    
    const paginationList = document.getElementById(targetId);
    paginationList.style.display = displayStyle;
}

//set current page state in pagination
export const paginate = (pageNumber, setCurrentpage) => {
    setCurrentpage(pageNumber); 
};
//handle of changing organization type in who we help section
export const handleChangeOrg = (orgList, setOrgType, setCurrentpage) => {
setOrgType(orgList);
setCurrentpage(1);
}

    // set email state and save email to local storage
    export const handleEmailInput = (setEmailData, emailLocalStorageValue) => (e) => {  
        let loginName = e.target.value   
        console.log(e.target.value);
        setEmailData(e.target.value)
        localStorage.setItem(emailLocalStorageValue, loginName);
    }

    // set input value state
    export const handleValueInput = (param) => (e) => {    
        console.log(e.target.value);
        param(e.target.value)
    }  

// for inputs in simple steps form
export  const handleChoice = param => (e) => {     
    localStorage.setItem(param, e.target.value);       
    console.log(e.target.value);       
}   

//for radio boxes in simple steps form
//for step 1
export const handleRadioChoice1 = param => (e) => {
    // e.preventDefault();
    localStorage.setItem(param, e.target.id);
    console.log(e.target.id);
  }
//for step 3
  export const handleRadioChoice2 = param => (e) => {  
    e.preventDefault(); 
    localStorage.setItem(param, e.target.id);
    console.log(e.target.id);
  }

  //for text input to override radio choices
  export const handleOverrideRadioWithText = param => (e) => {
          if (e.target.value != null) {
            localStorage.setItem(param, e.target.value);       
            console.log(e.target.value);
          }       
      }

  // click button with selected id 
  export const setClicked = (buttonId) => {
    document.getElementById(buttonId).click()
  }

  //patch login bool with this
  export const fetchLogged = (bool) => {
    let loggedInIs = {
        loggedIn: bool
    }
    setLoggedFetch(loggedInIs);
  }

    //change - fetch - patch order step number with this
    export const setStep = (stepNumber) => (e) => {
        // e.preventDefault();
        let step = {
            "currentStep": stepNumber
        }
        setTimeout(() => {
            setStepFetch(step);
            // window.location.reload();  
        }, 20);   
        window.location.reload();  
          
    }


  //login validation
  export const handleLoginValidation = (passwordData, emailData, 
    setLoggedIn, setPasswordData, setEmailData, emailErrorMessageId, passwordErrorMessageId, emailInputId, passwordInputId
    , errorColor1, validColor1) => (e) =>{
        e.preventDefault();
        
                const emailErrorMessage = document.getElementById(emailErrorMessageId);
                const passwordErrorMessage = document.getElementById(passwordErrorMessageId);
                const emailInputField = document.getElementById(emailInputId);
                const passwordInputField = document.getElementById(passwordInputId);
                // const errorColor = errorColor1;
                // const validColor = validColor1;   
        
        let isEmailValid = false;
        let isPasswordVaild = false;
       
        if (passwordData.length < 6) {           
            passwordErrorMessage.innerText = "Podane hasło jest nieprawidłowe";
            // passwordInputField.style.borderColor = "#DC143C";  
            isPasswordVaild = false;
                       
        }
        else if (passwordData.length >= 6) {           
            passwordErrorMessage.innerText = "";               
            passwordInputField.style.borderColor = "black";   
            isPasswordVaild = true;                       
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) === true) {
            //if email contains email chars         
           emailErrorMessage.innerText = "";
           emailInputField.style.borderColor = "black"; 
           isEmailValid = true;  
             
        }
        else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) === false) {
            emailErrorMessage.innerText = "Podany email jest nieprawidłowy" 
            isEmailValid = false;                     
        }           
     
        if (isPasswordVaild === true && isEmailValid === true){
            console.log("przesłano pomyślnie");   
            // setLoggedIn(true);
            // localStorage.setItem("loggedIn", true);    
            // localStorage.setItem("step", 1);
            fetchLogged(true);
            setStep(1);

            window.location.href="/loginSuccesful";
        } 
        else {
            console.log("login nieudany");
            setLoggedIn(false);
            localStorage.setItem("loggedIn", false);
            fetchLogged(false);
        }     
            nullifyState(setPasswordData);
            nullifyState(setEmailData);
            nullifyInputValue(emailInputField);
            nullifyInputValue(passwordInputField);   
           

    }

    //logging out with local storage
    export const logOut = (logged, locStorKey) => {
        logged = false;
        localStorage.setItem(locStorKey, false);  
        // fetchLogged(false);    
    } 

    //signup new user, send data to API
    const registerNewUser = (userEmail, userPassword) => {
        const userData = {          
            "userEmail": userEmail,
            "userPassword": userPassword,
            "orders": []
        }
        postRegister(userData);
    }

    //signup validation
    export const handleSignUpSubmit = (passwordData, passwordRepeatData, emailData, setLoggedIn,
        setPasswordData, setPasswordRepeatData, setEmailData, emailErrMessageId, passwordErrMessageId, passwordRepeatErrMessageId,
        emailInputId, passwordInputId, passwordRepeatInputId
        , errorColor2, validColor2) => (e) => {
        e.preventDefault();
        // setTimeout(() => {

        // }, 10)
        const emailErrorMessage = document.getElementById(emailErrMessageId);
        const passwordErrorMessage = document.getElementById(passwordErrMessageId);
        const confirmPasswordErrorMessage = document.getElementById(passwordRepeatErrMessageId);
        const emailInputField = document.getElementById(emailInputId);        
        const passwordInputField = document.getElementById(passwordInputId);
        const passwordRepeatInputField = document.getElementById(passwordRepeatInputId);
        // const errorColor = errorColor2;
        // const validColor = validColor2;
        let isEmailValid = false;
        let isPasswordVaild = false;
        let isPasswordConfirmed = false;
        let isEmptyInput = true;
        // if (passwordErrorMessage === null) {
        //     window.location.reload();
        // }

       if (emailData === null || passwordData === null || passwordRepeatData === null) {
           isEmptyInput = true;         
       }
       else if (emailData !== null && passwordData !== null && passwordRepeatData !== null)  {
           isEmptyInput = false;
       }
        if (passwordData.length < 6) {           
            passwordErrorMessage.innerText = "Podane hasło jest nieprawidłowe";
            // passwordInputField.style.borderColor = "#DC143C";  
            isPasswordVaild = false;                       
        }
        else if (passwordData.length >= 6) {           
            passwordErrorMessage.innerText = "";               
            passwordInputField.style.borderColor = "black";   
            isPasswordVaild = true;                       
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) === true) {
            //if email contains email chars         
           emailErrorMessage.innerText = "";
           emailInputField.style.borderColor = "black"; 
           isEmailValid = true;               
        }
        else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) === false) {
            emailErrorMessage.innerText = "Podany email jest nieprawidłowy" 
            isEmailValid = false;                     
        } 
        if (passwordData === null || passwordRepeatData === null) {
            isPasswordConfirmed = false;
            confirmPasswordErrorMessage.innerHTML = "hasło lub potwierdzenie hasła nieprawidłowe";
        }
        if (compareTwoStrings(passwordData, passwordRepeatData) === true) {
            if (passwordData === null || passwordRepeatData === null) {
                isPasswordConfirmed = false;
                confirmPasswordErrorMessage.innerHTML = "hasło lub potwierdzenie hasła nieprawidłowe";
            }
            else {                
                confirmPasswordErrorMessage.innerHTML = "";
                isPasswordConfirmed = true;
            }           
         }    
        else if (compareTwoStrings(passwordData, passwordRepeatData) === false) {         
            confirmPasswordErrorMessage.innerHTML = "Hasło nieprawidłowe";
            isPasswordConfirmed = false;
         }      
        if (isPasswordVaild === true && isEmailValid === true && isPasswordConfirmed === true && isEmptyInput === false){
            console.log("przesłano pomyślnie"); 
            setLoggedIn(true);
            localStorage.setItem("loggedIn", true);    
            localStorage.setItem("step", 1);
            fetchLogged(true);
            setStep(1);
            //fetch post here 
            registerNewUser(emailData, passwordData); 
            setTimeout(() => {
                window.location.href="/signUpSuccesful";   
            },10); 
                       
        }      
            nullifyStateString(setPasswordData);
            nullifyStateString(setEmailData);
            nullifyStateString(setPasswordRepeatData);
            nullifyInputValue(emailInputField);
            nullifyInputValue(passwordInputField);
            nullifyInputValue(passwordRepeatInputField);      
    }

    //contact message validation
    export const handleMessageSubmit = (nameData, emailData, messageData, nameFieldId, emailFieldId, messageFieldId, 
        sendMessage, setNameData, setEmailData, setMessageData) => (e) => {
        e.preventDefault();       
        const newMessage = {           
            name: nameData,
            email: emailData,
            message: messageData           
        };  
            //for claearing fields after submit
            const formNameField = document.getElementById(nameFieldId);
            const formEmailField = document.getElementById(emailFieldId);
            const formMessageField = document.getElementById(messageFieldId);
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
            else if (messageInput.length < 120) {
                alert("wiadomość za krótka, minimum 120 znaków");
            } 
            //max length message 2000 chars
            else if (messageInput.length > 2000) {
                alert("wiadomość za długa, max 2000 znaków");
            }                                         
            else{
                alert("dane prawidłowe, wiadomość wysłana pomyślnie");
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

