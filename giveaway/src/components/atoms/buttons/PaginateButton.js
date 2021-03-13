import React from 'react';

const PaginateButton = ({onClick, numberOfPage, id, className, href}) => {
    return (
        <button className={className} id={id} onClick={onClick} href={href}>{numberOfPage}</button>
    )
}

export default PaginateButton;

