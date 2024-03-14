// components/HeroComponent.js

import React from 'react';

const HeroComponent = () => {
    return (
        <div className="hero-container">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Welcome to Our Research Group</h1>
                    <p className="hero-description">
                        We are a dedicated team of researchers exploring innovative solutions in Science and Technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;
