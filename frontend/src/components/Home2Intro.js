import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Home2Intro.css';

const Home2Intro = () => {
    return (
        <div className="gray-bkg">
            <div className="gray-inner">
                <div className="research-section">
                    <h2 className="section-title">Research</h2>
                    <div className="section-content">
                        <p className="section-text">Our lab of microbial genomics and systems biology studies the immune system of bacteria. We are interested in deciphering the molecular mechanisms providing bacteria with protection against viruses that infect them (phages). We developed computational and experimental platforms to discover new bacterial immune systems in large scales. Our studies demonstrated that many important components of the human innate immune system evolved from bacterial immune systems, explaining the early evolution of the human innate immune system. We also discovered that viruses can use small-molecule communication in order to coordinate their infection dynamics - our lab studies the molecular mechanisms allowing virus-virus communication. Our research combines computational genomics, AI-based computational structural biology, metagenomics, metabolomics, biochemistry, and modern experimental approaches in microbiology and virology.</p>
                        <a className="research-link" href="/research">
                            <span className="link-text">Research page</span>
                            <ArrowRightOutlined className="arrow-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home2Intro;
