import React from 'react';

const ShowcaseColumn = ({bigNumber, headTxt, mainTxt}) => {
    return (
        <div className="three-columns-column">
            <p className="three-columns-column--number">{bigNumber}</p>
            <h3 className="three-columns-column--heading">{headTxt}</h3>
            <p className="three-columns-column--text">{mainTxt}</p>
        </div>
    )
}

export default ShowcaseColumn;