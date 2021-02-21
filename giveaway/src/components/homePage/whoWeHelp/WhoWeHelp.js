import React, {useState, useEffect} from 'react';
import Decoration from '../../../assets/icons/Decoration.svg';
import {Link} from 'react-router-dom';
import { preparedForPagination, showHidePagination, handleChangeOrg, paginate, setPageNumbers, setClicked } from '../../functionsStorage/functions';
import { getOrgs } from '../../../API/fetch';

const WhoWeHelp = () => {
    //get data here
    let [orgList, setOrgList] = useState([]);
    let [fundList, setFundList] = useState([]);
    let [charList, setCharList] = useState([]);
    let [orgType, setOrgType] = useState(orgList);
    // for pagination
    let [currentPage, setCurrentpage] = useState(1);
    let orgsPerpage = 3;
    
    useEffect(() => {
        //fetch objects withfrom db.json 
        getOrgs(`localCharities`, setCharList);
        getOrgs(`organizations`, setOrgList);
        getOrgs(`foundations`, setFundList);      
    },[])
   
    useEffect(() => {
        setClicked('startingDisplay');
    },[orgList]);
  
//pagination
const pageNumbers = setPageNumbers(orgType, orgsPerpage);

    return (        
        <div className="who-we-help-container container-full" id="whoWeHelp">
            <div className="who-we-help-top">
                <p className="about-decorated-text--large">Komu pomagamy?</p>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                <div className="who-we-help-top__options">
                    <button id="startingDisplay" className="btn who-we-help--button yellow-hover-btn" onClick={() => handleChangeOrg(orgList, setOrgType, setCurrentpage)}>Fundacjom</button>
                    <button className="btn who-we-help--button yellow-hover-btn" onClick={() => handleChangeOrg(fundList, setOrgType, setCurrentpage)}>Organizacjom pozarządowym</button>
                    <button className="btn who-we-help--button yellow-hover-btn" onClick={() => handleChangeOrg(charList, setOrgType, setCurrentpage)}>Lokalnym zbiórkom</button>
                </div> 
                <p className="who-we-help-top__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
            </div>
            <div className="who-we-help__list">                {                   
                        preparedForPagination(orgType, currentPage, orgsPerpage).map((el, index) => {                        
                                return (                       
                                    <div className="who-we-help__list--container" key={index}>
                                        <div className="who-we-help__list--left">
                                            <p className="who-we-help__list--name">{el.name}</p>
                                            <p className="who-we-help__list--text-left">{el.description}</p> 
                                        </div>  
                                        <div className="who-we-help__list--right"> 
                                            <p className="who-we-help__list--text-right">{el.items}</p>
                                        </div>                                     
                                    </div>  
                                    )                       
                        }) 
                }           
            </div>
            <div className="who-we-help__list--paginate"> {
                    pageNumbers.map((number) => {
                        setTimeout(() => {
                            if (orgType === charList) {                              
                                showHidePagination("pagination", "none")
                            }
                            else {
                                showHidePagination("pagination", "inline")
                            }
                        }, 0);                    
                        return ( 
                        <li id="pagination" className="who-we-help__list--paginate-list" key={number}>
                            <Link to="/whoWeHelp">
                                <button className="btn yellow-hover-btn" onClick={() => paginate(number, setCurrentpage)} href="!#">{number}</button>
                            </Link>
                        </li> 
                           )             
                    })
                }</div>           
        </div>        
    )    
}

export default WhoWeHelp;
