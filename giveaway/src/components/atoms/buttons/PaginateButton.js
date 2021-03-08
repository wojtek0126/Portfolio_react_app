import React from 'react';

const PaginateButton = ({onClick, numberOfPage}) => {
    return (
        <button className="btn yellow-hover-btn" onClick={onClick} href="!#">{numberOfPage}</button>
    )
}

export default PaginateButton;