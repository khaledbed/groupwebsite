// App.js

import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import HeroComponent from './components/HeroComponent';
import AboutComponent from './components/AboutComponent';
import ProjectsComponent from './components/ProjectsComponent';
import PublicationsComponent from './components/PublicationsComponent';
import TeamComponent from './components/TeamComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';

const App = () => {
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

export default App;

