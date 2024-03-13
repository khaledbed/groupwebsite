// components/ProjectsComponent.js

import React from 'react';
import { Typography, Row, Col, Card, Button } from 'antd';

const { Title, Text } = Typography;

const ProjectsComponent = () => {
    // Sample data for projects
    const projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit libero ac tellus hendrerit, sit amet fermentum diam vehicula.',
            image: 'https://via.placeholder.com/300', // Placeholder image from via.placeholder.com
        },
        {
            title: 'Project 2',
            description: 'Phasellus ut magna quis lectus dignissim dictum eget sit amet nisl. Vivamus aliquam orci at nunc ultrices fringilla.',
            image: 'https://via.placeholder.com/300', // Placeholder image from via.placeholder.com
        },
        {
            title: 'Project 3',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            image: 'https://via.placeholder.com/300', // Placeholder image from via.placeholder.com
        },
    ];

    return (
        <div className="projects-container">
            <Title level={2} className="section-title">Projects</Title>
            <Row gutter={[32, 32]}>
                {projects.map((project, index) => (
                    <Col xs={{ span: 24 }} md={{ span: 8 }} key={index}>
                        <Card
                            hoverable
                            className="project-card"
                            cover={<img alt={project.title} src={project.image} />} // Use project.image directly
                        >
                            <Card.Meta title={project.title} description={project.description} />
                            <Button type="primary" className="project-button">Learn More</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProjectsComponent;

