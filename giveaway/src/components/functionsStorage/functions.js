
//nullify state after submit for submitHandlers in forms
export const nullifyState = (setStateToClear) => {
    setTimeout(() => {
        setStateToClear([]);
    },0);      
}