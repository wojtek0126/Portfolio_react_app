
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
    if (localStorage.getItem(localStorageitem) === "true") {
        return true;
    }
    else {
        return false;
    }   
}

//switch to next step in simple steps
export const nextStep = (nextStepNumber) => {
    localStorage.setItem("step", nextStepNumber);
    window.location.reload();
}

//pagination
export const setPageNumbers = (orgType, orgsPerpage) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(orgType.length / orgsPerpage); i++) {
        pageNumbers.push(i);  
    }
    return pageNumbers;
}
  
// }
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

//setting login in state and localstorage
export const handleEmailChange = setEmailData => (e) => {  
    let loginName = e.target.value   
    console.log(e.target.value);
    setEmailData(e.target.value)
    localStorage.setItem("loginName", loginName);
}

// setting password in state
export const handlePasswordChange = setPasswordData => (e) => {    
    console.log(e.target.value);
    setPasswordData(e.target.value)
}  

// for inputs in simple steps form
export  const handleChoice = param => (e) => {     
    localStorage.setItem(param, e.target.value);       
    console.log(e.target.value);       
}   

//for radio boxes in simple steps form
export const handleRadioChoice = param => (e) => {
    // e.preventDefault();
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

  //login validation
  export const handleLoginValidation = (passwordData, emailData, 
    setLoggedIn, setPasswordData, setEmailData, emailErrorMessageId, passwordErrorMessageId, emailInputId, passwordInputId
    , errorColor, validColor) => (e) =>{
        e.preventDefault();
        const emailErrorMessage = document.querySelector(".login-email--error-message");
        const passwordErrorMessage = document.querySelector(".login-password--error-message");
        const emailInputField = document.getElementById("loginPassword");
        const passwordInputField = document.getElementById("loginEmail");
        const errorColor = "#DC143C";
        const validColor = "black";
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
            alert("przesłano pomyślnie");   
            setLoggedIn(true);
            localStorage.setItem("loggedIn", true);    
             localStorage.setItem("step", 1)
        }      
            nullifyState(setPasswordData);
            nullifyState(setEmailData);
            nullifyInputValue(emailInputField);
            nullifyInputValue(passwordInputField);    
    }
    

