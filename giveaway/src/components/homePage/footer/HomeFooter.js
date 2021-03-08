import React from 'react';
import FacebookIcon from '../../atoms/commonIcons/FacebookIcon';
import InstaIcon from '../../atoms/commonIcons/InstaIcon';

const HomeFooter = () => {
    return (
        <div className="footer-container">
            <div className="footer-copyright">Copyright by Coderslab</div>
            <div className="footer-icons">
                <a href="!#"><FacebookIcon /></a>
                <a href="!#"><InstaIcon /></a>            
            </div>
        </div>
    )
}

export default HomeFooter