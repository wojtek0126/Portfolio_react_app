import React from 'react';
// import {setStep} from '../../functionsStorage/functions';
import Icon1 from '../../../assets/icons/Icon-1.svg';
import Icon4 from '../../../assets/icons/Icon-4.svg';
import Contact from '../../homePage/contact/Contact';
import {Link} from 'react-router-dom';
import BearImage from '../sendItemsFragments/BearImage';
import StepsNavButton from '../sendItemsFragments/StepsNavButton';

const  SendSummary = () => {  
    // let [orderData, setOrderData] = useState([]);
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

    // const handleConfirm = (order, confirmStep = 6) => {
    //     setOrderData(order);
    //     setStep(confirmStep);
    //     window.location.reload();
    // }

    return (       
        <>    
            <div className="step-bottom-container">
               <div className="steps-table__wrap">
               <div className="step-summary__bottom">   
                      <div className="step-summary">
                            
                            <div className="step-summary-items">
                                <img src={Icon1} alt="ic1" className="simple-steps-decoration1"/>
                                <div className="step-summary__list">
                                    <span>Oddajesz:</span>
                                    <p>{order.bags} worki, {order.itemName}, {order.receiver}</p>
                                </div>                               
                            </div>                            
                                <div className="step-summary-items">
                                <img src={Icon4} alt="ic4" className="simple-steps-decoration2" />
                                    <div className="step-summary__list">                                       
                                        <p>Do lokalizacji: {order.localization}</p>
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
                        <Link to="/step4">
                            <StepsNavButton text={`Wstecz`} />
                        </Link>
                        <Link to="/stepsSuccess">
                            <StepsNavButton text={`Zatwierdź`} />
                        </Link>                           
                        </div> 
                </div>
               </div>             
              <BearImage />
            </div>  
               <Contact />              
               </>        
    )
}

export default SendSummary
