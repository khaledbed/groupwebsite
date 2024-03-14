// Home2Funders.js

import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Home2Funders.css';

const Home2Funders = () => {
    return (
        <div className="funders-section">
            <h2 className="section-title">Funders</h2>
            <Carousel
                className="funders-carousel"
                dots={{ className: 'custom-dots' }}
                prevArrow={<LeftOutlined className="carousel-arrow prev" />}
                nextArrow={<RightOutlined className="carousel-arrow next" />}
                slidesToShow={3}
                slidesToScroll={1}
                draggable={true}
                appendDots={dots => <div className="dots-container">{dots}</div>}
            >
                <div className="funders-slide">
                    <img src="/test1.png" alt="Funder 1" className="funder-image" />
                    <div className="funder-text">Funder 1 Text</div>
                </div>
                <div className="funders-slide">
                    <img src="/test5.png" alt="Funder 2" className="funder-image" />
                    <div className="funder-text">Funder 2 Text</div>
                </div>
                <div className="funders-slide">
                    <img src="/test4.png" alt="Funder 3" className="funder-image" />
                    <div className="funder-text">Funder 3 Text</div>
                </div>
                <div className="funders-slide">
                    <img src="/test3.png" alt="Funder 4" className="funder-image" />
                    <div className="funder-text">Funder 4 Text</div>
                </div>
                <div className="funders-slide">
                    <img src="/test2.png" alt="Funder 5" className="funder-image" />
                    <div className="funder-text">Funder 5 Text</div>
                </div>
            </Carousel>
            <div className="additional-content">  </div>
        </div>
    );
}

export default Home2Funders;
