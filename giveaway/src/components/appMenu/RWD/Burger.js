import React from 'react';

const Burger = ({onClick}) => {

    return (
        <div id="hamburger" className="burger" onClick={onClick}>
            <span className="burger-border-top"></span>
            <span id="burger-1" className="burger1"></span>
            <span id="burger-2" className="burger2"></span>
            <span className="burger-border-bottom"></span>
        </div>
    )
}

export default Burger;

// "login-menu-container" "login-menu__top"