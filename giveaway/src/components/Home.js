import React from 'react';
import HomeHeader from "./HomeHeader.js";
import HomeThreeColumns from "./HomeThreeColumns";
import SimpleSteps from "./SimpleSteps.js";
import About from "./About.js";
import WhoWeHelp from "./WhoWeHelp.js";
import Contact from "./Contact.js";


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
