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
                        <Avatar size={200} src="team-member-1.jpg" />
                        <Title level={3}>John Doe</Title>
                        <p>Research Scientist</p>
                        <Button type="primary">View Profile</Button>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Card className="team-card">
                        <Avatar size={200} src="team-member-2.jpg" />
                        <Title level={3}>Jane Smith</Title>
                        <p>Data Analyst</p>
                        <Button type="primary">View Profile</Button>
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <Card className="team-card">
                        <Avatar size={200} src="team-member-3.jpg" />
                        <Title level={3}>David Johnson</Title>
                        <p>Software Engineer</p>
                        <Button type="primary">View Profile</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default TeamComponent;

