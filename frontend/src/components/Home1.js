// Home1.js

import React from 'react';
import HeaderComponent from './HeaderComponent';
import HeroComponent from './HeroComponent';
import AboutComponent from './AboutComponent';
import ProjectsComponent from './ProjectsComponent';
import PublicationsComponent from './PublicationsComponent';
import TeamComponent from './TeamComponent';
import ContactComponent from './ContactComponent';
import FooterComponent from './FooterComponent';
import './Home1.css';

const Home1 = () => {
    return (
        <div className="App">
            <HeaderComponent />
            <HeroComponent />
            <AboutComponent />
            <ProjectsComponent />
            <PublicationsComponent />
            <TeamComponent />
            <ContactComponent />
            <FooterComponent />
        </div>
    );
}

export default Home1;

