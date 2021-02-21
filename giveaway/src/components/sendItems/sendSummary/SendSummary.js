import React, {useState} from 'react';
import { fetchSetStep, nextStep, setStep } from '../../functionsStorage/functions';
import bear from '../../../assets/images/bear.jpg'
import Icon1 from '../../../assets/icons/Icon-1.svg';
import Icon4 from '../../../assets/icons/Icon-4.svg';
import Contact from '../../homePage/contact/Contact';
import HomeFooter from '../../homePage/footer/HomeFooter';

const  SendSummary = () => {  
    let [orderData, setOrderData] = useState([]);
    // let [userId, setUserId] = useState([]);
    const order = 
    {
        itemName: localStorage.getItem("itemName"),
        bags: localStorage.getItem("bags"),
        receiver: localStorage.getItem("receiver"),
        localization: localStorage.getItem("localization"),
        street: localStorage.getItem("street"),
        city: localStorage.getItem("city"),
        postCode: localStorage.getItem("postCode"),
        tel: localStorage.getItem("tel"),
        date: localStorage.getItem("date"),
        hour: localStorage.getItem("time"),
        extraNotes: localStorage.getItem("extraNotes")
    }
    console.log(order);

    const handleConfirm = (order, confirmStep = 6) => {
        setOrderData(order);

        setStep(confirmStep);
    }

    return (       
        <>    
            <div className="step-bottom-container">
               <div className="steps-table__wrap">
               <div className="step-summary__bottom">   
                      <div className="step-summary">
                            
                            <div className="step-summary-items">
                                <img src={Icon1} alt="ic1" className="simple-steps-decoration"/>
                                <div className="step-summary__list">
                                    <span>Oddajesz:</span>
                                    <p>{order.bags} worki, {order.itemName}, {order.receiver}</p>
                                </div>                               
                            </div>                            
                                <div className="step-summary-items">
                                <img src={Icon4} alt="ic4" className="simple-steps-decoration" />
                                    <div className="step-summary__list">
                                        <span>Do lokalizacji:</span>
                                        <p> {order.localization}</p>
                                    </div>                                 
                        </div>    
                      </div>
                      <div className="step-summary__details--container">
                        <div className="step-summary-details"><span>Adres odbioru: </span>
                            <p>Ulica: {order.street}</p>
                            <p>Miasto: {order.city}</p> 
                            <p>Kod pocztowy: {order.postCode}</p>
                            <p>Numer telefonu: {order.tel}</p>
                        </div>    
                        <div className="step-summary-date"><span>Data odbioru: </span> 
                            <p>Data: {order.date}</p>
                            <p>Godzina: {order.hour}</p> 
                            <p>Uwagi do kuriera: {order.extraNotes}</p>                    
                        </div>                          
                      </div>      
                        <div className="step-form__buttons">
                            <button onClick={setStep(4)} className="btn steps-button yellow-hover-btn">Wstecz</button>
                            <button onClick={() => handleConfirm(order)} className="btn steps-button yellow-hover-btn">Zatwierdź</button>
                        </div> 
                </div>
               </div> 
            
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>  
               <Contact />
               <HomeFooter />  
               </>        
    )
}

export default SendSummary
