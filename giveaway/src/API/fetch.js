// json-server --watch data/db.json --host 127.0.0.1
import {API} from "./variables";
import {Messages_API} from "./variables";

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