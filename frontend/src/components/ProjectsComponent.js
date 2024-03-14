import React, { useRef } from 'react';
import { Typography, Card, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'; // Import arrow icons

const { Title } = Typography;

const ProjectsComponent = () => {
    const projectsContainerRef = useRef(null);

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
        {
            title: 'Project 4',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'https://via.placeholder.com/300', // Placeholder image from via.placeholder.com
        },
        {
            title: 'Project 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit libero ac tellus hendrerit, sit amet fermentum diam vehicula.',
            image: 'https://via.placeholder.com/300', // Placeholder image from via.placeholder.com
        },
        {
            title: 'Project 6',
            description: 'Phasellus ut magna quis lectus dignissim dictum eget sit amet nisl. Vivamus aliquam orci at nunc ultrices fringilla.',
            image: 'https://via.placeholder.com/300', // Placeholder image from via.placeholder.com
        },
        {
            title: 'Project 7',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            image: 'https://via.placeholder.com/300', // Placeholder image from via.placeholder.com
        },
        {
            title: 'Project 8',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'https://via.placeholder.com/300', // Placeholder image from via.placeholder.com
        },
        // Add more projects as needed
    ];

    const scrollLeft = () => {
        if (projectsContainerRef.current) {
            projectsContainerRef.current.scrollBy({
                left: -300, // Adjust according to the width of your project cards
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (projectsContainerRef.current) {
            projectsContainerRef.current.scrollBy({
                left: 300, // Adjust according to the width of your project cards
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="projects-container">
            <Title level={2} className="section-title">Projects</Title>
            <div className="projects-list" ref={projectsContainerRef}>
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <Card
                            hoverable
                            cover={<img alt={project.title} src={project.image} />}
                        >
                            <Card.Meta title={project.title} description={project.description} />
                            <Button type="primary" className="project-button">Learn More</Button>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="scroll-buttons">
                <LeftOutlined className="scroll-button" onClick={scrollLeft} />
                <RightOutlined className="scroll-button" onClick={scrollRight} />
            </div>
        </div>
    );
};

export default ProjectsComponent;