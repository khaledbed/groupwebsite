// Home2Slider.js

import React from 'react';
import './Home2Slider.css';

const Home2Slider = () => {
    return (
        <div className="slider">
            <div className="placeholder" style={{ backgroundImage: "url('/test2.png')" }}></div>
            <div className="decorative-element"></div>
            <div className="left-square"></div>
            <div className="right-square"></div>
            <div className="overlay">
                <div className="text-box">
                    <h2>Welcome to</h2>
                    <p>The Microbiome Dynamics Group</p>
                </div>
            </div>
        </div>
    );
}

export default Home2Slider;
