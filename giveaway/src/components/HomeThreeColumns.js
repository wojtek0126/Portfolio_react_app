import React from 'react';

const HomeThreeColumns = () => {
    return (
        <div className="three-columns-container">
            <div className="three-columns-column">
                <p className="three-columns-column--number">8</p>
                <h3 className="three-columns-column--heading">oddanych worków</h3>
                <p className="three-columns-column--text">lorem ipsum lablablabla ten</p>
            </div>
            <div className="three-columns-column">
                <p className="three-columns-column--number">28</p>
                <h3 className="three-columns-column--heading">wspartych organizacji</h3>
                <p className="three-columns-column--text">lorem ipsum lablablabla ten plepleple</p>
            </div>
            <div className="three-columns-column">
                <p className="three-columns-column--number">58</p>
                <h3 className="three-columns-column--heading">zorganizowanych zbiórek</h3>
                <p className="three-columns-column--text">lorem ipsum lablablabla ten tadenten</p>
            </div>
        </div>
    )
}

export default HomeThreeColumns;
