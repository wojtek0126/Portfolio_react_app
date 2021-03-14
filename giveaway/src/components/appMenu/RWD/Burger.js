import React from 'react';

const Burger = () => {

    const handleClick = () => {
        const burgerContainer = document.getElementById("hamburger");
        const burger1  = document.getElementById("burger-1");
        const burger2  = document.getElementById("burger-2");
        burger1.classList.toggle("burger1-clicked");
        burger2.classList.toggle("burger2-clicked"); 
        burger1.classList.toggle("burger1");    
        burger2.classList.toggle("burger2"); 
        burgerContainer.classList.toggle("burger-clicked");    
    }

    return (
        <div id="hamburger" className="burger" onClick={handleClick}>
            <span className="burger-border-top"></span>
            <span id="burger-1" className="burger1"></span>
            <span id="burger-2" className="burger2"></span>
            <span className="burger-border-bottom"></span>
        </div>
    )
}

export default Burger;