// components/AboutComponent.js

import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const AboutComponent = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <Row gutter={[32, 32]} align="middle">
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                        <img src="about-image.jpg" alt="About Us" className="about-image" />
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                        <Title level={2}>About Us</Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit libero ac tellus hendrerit, sit amet fermentum diam vehicula.
                        </Paragraph>
                        <Paragraph>
                            Phasellus ut magna quis lectus dignissim dictum eget sit amet nisl. Vivamus aliquam orci at nunc ultrices fringilla.
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutComponent;

