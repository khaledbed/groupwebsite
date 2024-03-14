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
                        <div className="about-image"></div>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                        <div className="about-text">
                            <Title level={2}>About Us</Title>
                            <Paragraph>
                            </Paragraph>
                            <Paragraph>
                                Humans are practically identical in terms of genetic makeup (up to 99.5%) but are more diverse concerning their microbiota (only 10–20% common species). In the Department of Microbiome Dynamics (formerly Systems Biology and Bioinformatics) we envision personalized medicines and nutrition focused on the human gut microbiome, a key determinant of both human health status and individualized response to diet. With a 150-fold greater gene count than humans, the gut microbiome comprises a rich enzyme repository with massive metabolic productivity and food-metabolizing capacity. We employ experimental meta'omic tools and novel eco-systems biology approaches to study the composition of the host and environmental microbiome and its role in human diseases and infections. Our projects bring together bioinformaticians, microbiologists, data scientists, and clinicians.
                            </Paragraph>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutComponent;
