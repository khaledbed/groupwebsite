// components/HeroComponent.js

import React from 'react';
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const HeroComponent = () => {
    return (
        <div className="hero-container">
            <div className="hero-background"></div>
            <div className="hero-content">
                <Title className="hero-title">Welcome to Our Research Group</Title>
                <Paragraph className="hero-description">
                    We are a dedicated team of researchers exploring innovative solutions in Science and Technology.
                </Paragraph>
                <Button type="primary" size="large" className="hero-button">Explore Our Work</Button>
            </div>
        </div>
    );
};

export default HeroComponent;

