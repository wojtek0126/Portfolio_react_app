// json-server --watch data/db.json --host 127.0.0.1
import {API} from "./variables";
import {Messages_API} from "./variables";

export const getItems = (itemsToGet, successCallback) => {
    fetch(`${API}/${itemsToGet}`)
        .then(response => response.json())
        .then(data => {
            successCallback(data);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);
            }
        })
        .catch(error => {
            console.log(error);           
        });
}

export const getLoggedBool = (successCallback) => {
    fetch(`${API}/loggedIn`)
        .then(response => response.json())
        .then(data => {
            successCallback(data[0].loggedIn);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data[0].loggedIn);
            }
        })
        .catch(error => {
            console.log(error);           
        });
}

export const getOrgs = (itemsToGet, successCallback) => {
    fetch(`${API}/${itemsToGet}`)
        .then(response => response.json())
        .then(data => {
            successCallback(data);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);
            }
        })
        .catch(error => {
            console.log(error);           
        });
}

//post contact form
export const sendMessage = (messageData, successCallback) => {
    fetch(`${Messages_API}`, {
        headers: {
            // "Authorization": API_KEY,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(messageData)
    })
        .then(r => r.json())
        .then(data => {            
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);             
            }
        })
        .catch(err => console.log(err));
};

export const postRegister = (registerData, successCallback) => {
    fetch(`${API}/users`, {
        headers: {
            // "Authorization": API_KEY,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(registerData)
    })
        .then(r => r.json())
        .then(data => {            
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);             
            }
        })
        .catch(err => console.log(err));
};

export const setLoggedFetch = (itemData, successCallback) => {
    fetch(`${API}/loggedIn/1`, {
        headers: {
            // "Authorization": API_KEY,
            "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(itemData)
    })
        .then(r => r.json())
        .then(data => {            
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);             
            }
        })
        .catch(err => console.log(err));
};