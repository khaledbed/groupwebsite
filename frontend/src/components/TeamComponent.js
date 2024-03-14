// components/TeamComponent.js

import React from 'react';
import { Typography, Row, Col, Avatar, Card, Button } from 'antd';

const { Title } = Typography;

const TeamComponent = () => {
    return (
        <div className="team-container">
            <Title level={2} className="section-title">Meet Our Team</Title>
            <Row gutter={[32, 32]} align="middle">
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Card className="team-card">
                        <Avatar size={200} src="people/Bastian2.jpg" />
                        <Title level={3}>Bastian</Title>
                        <p>Research Scientist</p>
                        <Button type="primary">View Profile</Button>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Card className="team-card">
                        <Avatar size={200} src="people/lu.jpeg" />
                        <Title level={3}>Lu</Title>
                        <p>PhD Student</p>
                        <Button type="primary">View Profile</Button>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Card className="team-card">
                        <Avatar size={200} src="people/Sascha.png" />
                        <Title level={3}>Sascha</Title>
                        <p>Head of Data Integration</p>
                        <Button type="primary">View Profile</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default TeamComponent;

