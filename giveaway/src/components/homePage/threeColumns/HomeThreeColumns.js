import React from 'react';

const HomeThreeColumns = () => {
    return (
        <div className="three-columns-container container-full">
            <div className="three-columns-column">
                <p className="three-columns-column--number">8</p>
                <h3 className="three-columns-column--heading">oddanych worków</h3>
                <p className="three-columns-column--text">Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. </p>
            </div>
            <div className="three-columns-column">
                <p className="three-columns-column--number">28</p>
                <h3 className="three-columns-column--heading">wspartych organizacji</h3>
                <p className="three-columns-column--text">Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. </p>
            </div>
            <div className="three-columns-column">
                <p className="three-columns-column--number">58</p>
                <h3 className="three-columns-column--heading">zorganizowanych zbiórek</h3>
                <p className="three-columns-column--text">Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. </p>
            </div>
        </div>
    )
}

export default HomeThreeColumns;
