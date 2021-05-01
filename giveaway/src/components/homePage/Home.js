import React from 'react';
import HomeHeader from "./header/HomeHeader.js";
import HomeThreeColumns from "./threeColumns/HomeThreeColumns";
import SimpleSteps from "./simpleSteps/SimpleSteps.js";
import About from "./about/About.js";
import WhoWeHelp from "./whoWeHelp/WhoWeHelp.js";
import Contact from "./contact/Contact.js";

const Home = () => {   
    return (
       <>
        <HomeHeader />
        <HomeThreeColumns />
        <SimpleSteps />       
        <About />
        <WhoWeHelp />
        <Contact />     
       </>
    )
}

export default Home;
