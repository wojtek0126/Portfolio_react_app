import React from 'react';

const MenuButtonLarger = ({text, id, href}) => {
    return (
        <button className="btn menu-bottom-button" href={href} id={id}>{text}</button>
    )
}

export default MenuButtonLarger;