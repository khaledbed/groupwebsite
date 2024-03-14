import React from 'react';
import { Layout } from 'antd';
import Home2Menu from './Home2Menu';
import Home2Slider from './Home2Slider';
import Home2Intro from './Home2Intro';
import Home2Funders from './Home2Funders';
import ProjectsComponent from './ProjectsComponent';
import PublicationsComponent from './PublicationsComponent';
import TeamComponent from './TeamComponent';
import ContactComponent from './ContactComponent';
import FooterComponent from './FooterComponent';
import './Home2.css'; 

const { Content } = Layout;

const Home2 = () => {
    return (
        <Layout className="layout">
            <Home2Menu />
            <Content className="content">
                <Home2Slider />
                <Home2Intro />
                <Home2Funders />
                <PublicationsComponent />
                <TeamComponent />
                <FooterComponent />
                <div className="main-content">
                    {/* Your main content goes here */}
                </div>
            </Content>
        </Layout>
    );
}

export default Home2;
