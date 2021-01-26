import React, {useState} from 'react';
import Decoration from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Decoration.svg';
import {getCharityOrgs} from 'C:/CodersLab/Portfolio_react_app/giveaway/src/API/fetch.js';

const WhoWeHelp = () => {
    const foundations = [ {
        name: "bobflex",
        description: "jedzenie mało używane",
        items: "banany używane, szprychy od rowerów"
    },
    {
        name: "pitu sp.zoo",
        description: "pomoce szkolne dla ubogich",
        items: "szmaty do podłogi z prlu"
    }]

    const organizations = [ {
        name: "tłumix sa",
        description: "producent tłumików",
        items: "używane maski chirurgiczne"
    },
    {
        name: "loto",
        description: "fejkowa loteria",
        items: "stare gazety"
    }]

    const localCharities = [ {
        name: "ratuj pancerniki",
        description: "przeciw smażeniu robaków na wykałaczce",
        items: "stare wykałaczki"
    },
    {
        name: "nakarm głodujące wszy",
        description: "daj skalpa",
        items: "łupierz"
    }]

    // const mapperNames = (array) => {
    //    array.map((el) => {
    //         return console.log(el.name);
    //     }) 
    // };
    // let [orgList, setOrgList] = useState([]);
    let [input, setInput] = useState(foundations);

    // getCharityOrgs(setOrgList);
    // console.log(orgList);
    
    // const onClick1 = (arrayName) => {
    //         return arrayName
    // };
    
   

    return (
        <div className="who-we-help-container" id="whoWeHelp">
            <div className="who-we-help-top">
                <p>Komu pomagamy?</p>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                <div className="who-we-help-top__options">
                    <button className="btn who-we-help--button" onClick={() => setInput(organizations)}>Fundacjom</button>
                    <button className="btn who-we-help--button" onClick={() => setInput(foundations)}>Organizacjom pozarządowym</button>
                    <button className="btn who-we-help--button" onClick={() => setInput(localCharities)}>Lokalnym zbiórkom</button>
                </div> 
                <p className="who-we-help-top__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, 
                    z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
            </div>
            <div className="who-we-help__list">
                {
                         input.map((el, index) => {
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
                        }) 
                }
            </div>
        
        
        </div>
    )
}

export default WhoWeHelp;
