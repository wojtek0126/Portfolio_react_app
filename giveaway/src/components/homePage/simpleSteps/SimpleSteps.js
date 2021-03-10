import React from 'react';
import {Link} from 'react-router-dom';
import BigUppercaseBtn from '../../atoms/buttons/BigUppercaseBtn';
import LargeTxtWithDecor from '../homePageFragments/LargeTxtWithDecor';
import SimpleStep from '../homePageFragments/SimpleStep';

const SimpleSteps = () => {
    return (
        <div className="simple-steps-container container-full" id="simpleSteps">        
            <LargeTxtWithDecor text={`Wystarczą 4 proste kroki`} />
            <div className="simple-steps-middle">              
                <SimpleStep headTxt={`Wybierz rzeczy`} mainTxt={`ubrania, zabawki, sprzęt i inne`} icon={`shirt`} />
                <SimpleStep headTxt={`Spakuj je`} mainTxt={`skorzystaj z worków na śmieci`} icon={`bag`} />
                <SimpleStep headTxt={`Zdecyduj komu chcesz pomóc`} mainTxt={`wybierz zaufane miejsce`} icon={`search`} />
                <SimpleStep headTxt={`Zamów kuriera`} mainTxt={`kurier przyjedzie w dogodnym terminie`} icon={`delivery`} />
            </div>
            <div className="simple-steps-bottom">
                <Link to="/login">
                    <BigUppercaseBtn text={`oddaj rzeczy`} />   
                </Link>             
            </div>            
        </div>
    )
}

export default SimpleSteps;
