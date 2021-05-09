import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const MenuBtnLarLogin = ({text, id, linkTo}) => {
    return (
        <Link to={linkTo} className="btn menu-bottom-button menu-btn-login" id={id}>{text}</Link>
    )
}

export default MenuBtnLarLogin;