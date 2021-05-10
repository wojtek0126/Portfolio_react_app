import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {preparedForPagination, showHidePagination, handleChangeOrg, paginate, setPageNumbers, setClicked} from '../../functionsStorage/functions';
import {getOrgs} from '../../../API/fetch';
import MediumButton from '../../atoms/buttons/MediumButton';
import PaginateButton from '../../atoms/buttons/PaginateButton';
import LargeTxtWithDecor from '../homePageFragments/LargeTxtWithDecor';

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
        //fetch objects with from db.json 
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
                <LargeTxtWithDecor text={`Komu pomagamy?`} className={`decorated-text--large`} 
                wrapperClass={`header-right-side--content__text`}/>
                <div className="who-we-help-top__options">     
                    <MediumButton  id={"startingDisplay"} text={`Fundacjom`} onClick={() => handleChangeOrg(orgList, setOrgType, setCurrentpage)} />
                    <MediumButton  text={`Organizacjom pozarządowym`} onClick={() => handleChangeOrg(fundList, setOrgType, setCurrentpage)} />
                    <MediumButton  text={`Lokalnym zbiórkom`} onClick={() => handleChangeOrg(charList, setOrgType, setCurrentpage)} />
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
                        <div id="pagination" className="who-we-help__list--paginate-list" key={number}>
                            <Link to="/whoWeHelp">
                                <PaginateButton id={"pagination"}
                                 numberOfPage={number}
                                 className={"btn yellow-hover-btn paginate-button"}
                                 href={"!#"}
                                 onClick={() => paginate(number, setCurrentpage)} />                                
                            </Link>
                        </div> 
                           )             
                    })
                }</div>           
        </div>        
    )    
}

export default WhoWeHelp;
