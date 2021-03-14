import React from 'react';
import Decoration from '../../atoms/commonIcons/Decoration';

const LargeTxtWithDecor = ({text, textSecondLine, className, wrapperClass, id}) => {
    return (
        <div className={wrapperClass} id={id}>
           <p className={className} >{text}<br/>{textSecondLine}</p>                    
           <Decoration />
        </div>
    )
} 
// `decorated-text--large "header-right-side--content__text"

export default LargeTxtWithDecor;