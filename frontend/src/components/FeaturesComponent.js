// components/FeaturesComponent.js

import React from 'react';
import { Typography, Row, Col, Card } from 'antd';

const { Title } = Typography;

const FeaturesComponent = () => {
    return (
        <div className="features-container">
            <Title level={2} className="section-title">Key Features</Title>
            <Row gutter={[32, 32]} align="middle">
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Card className="feature-card">
                        <Title level={3}>Feature 1</Title>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Card className="feature-card">
                        <Title level={3}>Feature 2</Title>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Card className="feature-card">
                        <Title level={3}>Feature 3</Title>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default FeaturesComponent;

