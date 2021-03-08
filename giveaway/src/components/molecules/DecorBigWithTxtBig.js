import React from 'react';
import DecorationBig from '../atoms/commonIcons/DecorationBig';

const DecorBigWithTxtBig = ({textTop, textBottom, className}) => {

    return (
        <>
          <h1 className={className}>{textTop}<br/>{textBottom}</h1>                        
          <DecorationBig />
        </>
    )
}

export default DecorBigWithTxtBig;