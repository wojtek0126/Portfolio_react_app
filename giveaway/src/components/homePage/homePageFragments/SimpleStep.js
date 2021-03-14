import React from 'react';
import BagIcon from '../../atoms/commonIcons/BagIcon';
import DeliveryIcon from '../../atoms/commonIcons/DeliveryIcon';
import SearchIcon from '../../atoms/commonIcons/SearchIcon';
import ShirtIcon from '../../atoms/commonIcons/ShirtIcon';

const SimpleStep = ({headTxt, mainTxt, icon}) => {
    return (
        <div className="simple-steps-middle__align">
               {(() => {
              if (icon === "shirt"){
                  return (
                    <ShirtIcon />
                  )
              };
              if (icon === "bag"){
                return (
                  <BagIcon />
                )
            };
            if (icon === "search"){
                return (
                  <SearchIcon />
                )
            }; 
            if (icon === "delivery"){
                return (
                  <DeliveryIcon />
                )
            };             
              return null;
            })()}          
            <p className="simple-steps-middle__underlined">{headTxt}</p>
            <div className="simple-steps-middle__underlined--underline"></div>
            <p className="simple-steps-middle__bottom-text">{mainTxt}</p>
        </div>
    )
}

export default SimpleStep;