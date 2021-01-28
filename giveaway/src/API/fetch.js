
// json-server --watch data/db.json --host 127.0.0.1
import {API} from "./variables";


export const getCharityOrgs = (successCallback) => {
    fetch(`${API}/localCharities`)
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

export const getOrganizations = (successCallback) => {
    fetch(`${API}/organizations`)
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

export const getFoundations = (successCallback) => {
    fetch(`${API}/foundations`)
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

export const getMessages = (successCallback) => {
    fetch(`${API}/messages`)
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
    fetch(`${API}/messages`, {
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