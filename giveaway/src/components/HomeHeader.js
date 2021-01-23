import React from 'react';
import header from '../assets/header.jpg'

const HomeHeader = () => {   
    return (
        <div className="header-container">
        <img src={header} className="header-left-side" alt="header-left-img" />
        <div className="header-right-side">prawa strona header, tu menu z dwu części oraz treść z dwoma przyciskami</div>
        </div>
    )
}

export default HomeHeader;
