import React from 'react';
import Instagram from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Instagram.svg'
import Facebook from 'C:/CodersLab/Portfolio_react_app/giveaway/src/assets/icons/Facebook.svg'

const HomeFooter = () => {
    return (
        <div className="footer-container">
            <div className="footer-copyright">Copyright by Coderslab</div>
            <div className="footer-icons">
                <a href="!#"><img src={Facebook} alt="facebook" className="footer-icons--icon" /></a>
                <a href="!#"><img src={Instagram} alt="insta" className="footer-icons--icon" /></a>            
            </div>
        </div>
    )
}

export default HomeFooter