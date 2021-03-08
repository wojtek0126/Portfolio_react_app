import React from 'react';
import Decoration from '../../atoms/commonIcons/Decoration';

const LargeTxtWithDecor = ({text, textSecondLine}) => {
    return (
        <div className="header-right-side--content__text">
           <p className="decorated-text--large">{text}<br/>{textSecondLine}</p>                    
           <Decoration />
        </div>
    )
}

export default LargeTxtWithDecor;