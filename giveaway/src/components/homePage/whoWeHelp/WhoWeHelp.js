import React, {useState, useEffect} from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import {getCharityOrgs, getOrganizations, getFoundations} from 'C:/CodersLab/Portfolio_react_app/giveaway/src/API/fetch.js';
import {Link} from 'react-router-dom';

const WhoWeHelp = () => {

    let [orgList, setOrgList] = useState([]);
    let [fundList, setFundList] = useState([]);
    let [charList, setCharList] = useState([]);
    let [orgType, setOrgType] = useState(orgList);
    //pagination
    let [currentPage, setCurrentpage] = useState(1);
    let orgsPerpage = 3;

    useEffect(() => {
        getCharityOrgs(setCharList);
        getOrganizations(setOrgList);
        getFoundations(setFundList);      
    },[])
   
    useEffect(() => {
        document.getElementById('startingDisplay').click()
    },[orgList]);
  
//pagination
const preparedForPagination = (list) => {
    const indexOfLastOrg = currentPage * orgsPerpage;
    const indexOfFirstOrg = indexOfLastOrg - orgsPerpage;
    const currentOrgs = list.slice(indexOfFirstOrg, indexOfLastOrg);
    return currentOrgs
}; 

const pageNumbers = [];

for (let index = 1; index <= Math.ceil(orgType.length / orgsPerpage); index++) {
    pageNumbers.push(index);
    
}

const paginate = (pageNumber) => {
        setCurrentpage(pageNumber); 
};

const handleChangeOrg = (orgList) => {
    setOrgType(orgList);
    setCurrentpage(1);
}

const hidePagination = (targetId) => {    
    const paginationList = document.getElementById(targetId);
    paginationList.style.display = "none";
}

const showPagination = (targetId) => {    
    const paginationList = document.getElementById(targetId);
    paginationList.style.display = "inline";
}

    return (        
        <div className="who-we-help-container" id="whoWeHelp">
            <div className="who-we-help-top">
                <p>Komu pomagamy?</p>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                <div className="who-we-help-top__options">
                    <button id="startingDisplay" className="btn who-we-help--button" onClick={() => handleChangeOrg(orgList)}>Fundacjom</button>
                    <button className="btn who-we-help--button" onClick={() => handleChangeOrg(fundList)}>Organizacjom pozarządowym</button>
                    <button className="btn who-we-help--button" onClick={() => handleChangeOrg(charList)}>Lokalnym zbiórkom</button>
                </div> 
                <p className="who-we-help-top__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
            </div>
            <div className="who-we-help__list">
                {                   
                        preparedForPagination(orgType).map((el, index) => {
                         
                            // else{
                                return (                       
                                    <div className="who-we-help__list--container" key={index}>
                                        <div className="who-we-help__list--left">
                                            <p className="who-we-help__list--name">{el.name}</p>
                                            <p className="who-we-help__list--text">{el.description}</p> 
                                        </div>  
                                        <div className="who-we-help__list--right"> 
                                            <p className="who-we-help__list--text">{el.items}</p>
                                        </div>                                     
                                    </div>  
                                    )
                            // }
                   
                        }) 
                }
           
            </div>
            <div className="who-we-help__list--paginate"> {
                    pageNumbers.map((number) => {
                        setTimeout(() => {
                            if (orgType === charList) {                              
                                hidePagination("pagination")
                            }
                            else {
                                showPagination("pagination")
                            }
                        }, 0);
                    
                        return ( 
                        <li id="pagination" className="who-we-help__list--paginate-list" key={number}>
                            <Link to="/whoWeHelp">
                                <a onClick={() => paginate(number)} href="!#">{number}</a>
                            </Link>
                        </li> 
                           )
                        // <li key={number}> <a href="!#">{number}</a></li>
                       
                     
                    })
                }</div>
           
        </div>
        
    )    
}

export default WhoWeHelp;
