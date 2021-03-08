import React from 'react';
import ShowcaseColumn from '../homePageFragments/ShowcaseColumn';

const HomeThreeColumns = () => {
    return (
        <div className="three-columns-container">
            <ShowcaseColumn bigNumber={`8`} headTxt={`oddanych worków`}
             mainTxt={`Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.`} />
            {/* <div className="three-columns-column">
                <p className="three-columns-column--number">8</p>
                <h3 className="three-columns-column--heading">oddanych worków</h3>
                <p className="three-columns-column--text">Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. </p>
            </div> */}
            <ShowcaseColumn bigNumber={`28`} headTxt={`wspartych organizacji`}
             mainTxt={`Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.`} />
            {/* <div className="three-columns-column">
                <p className="three-columns-column--number">28</p>
                <h3 className="three-columns-column--heading">wspartych organizacji</h3>
                <p className="three-columns-column--text">Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. </p>
            </div> */}
            <ShowcaseColumn bigNumber={`58`} headTxt={`zorganizowanych zbiórek`}
             mainTxt={`Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.`} />
            {/* <div className="three-columns-column">
                <p className="three-columns-column--number">58</p>
                <h3 className="three-columns-column--heading">zorganizowanych zbiórek</h3>
                <p className="three-columns-column--text">Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. </p>
            </div> */}
        </div>
    )
}

export default HomeThreeColumns;
