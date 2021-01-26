
// json-server --watch db.json --host 127.0.0.1
import {API} from "./variables";

export const getCharityOrgs = (successCallback) => {
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