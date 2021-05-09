import React, { useState, useEffect } from "react";
import { Slider } from 'react-burgers'
 
const Hamburger = () => {
  const [active, setActive] = useState(false);  

  useEffect (() => {

  },[])


  const handleClick = () => {
     
        const menuTop = document.querySelector('.login-menu__top');
        const menuBottom = document.querySelector('.login-menu__bottom');
  
    
    if(active === false) {
      setActive(true);      
    }
    else {
      setActive(false)
    }

    menuTop.classList.toggle("active-flex");
    menuBottom.classList.toggle("active-flex"); 
  } 
  
    return (
      <Slider active={active} onClick={handleClick}/>
    );

}

export default Hamburger;