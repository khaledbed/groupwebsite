// components/PublicationsComponent.js

import React from 'react';
import { Typography, List } from 'antd';

const { Title } = Typography;

const PublicationsComponent = () => {
    // Sample data for publications
    const publications = [
        {
            title: 'Publication 1',
            authors: ['Author 1', 'Author 2'],
            journal: 'Journal of Science',
            year: 2021,
        },
        {
            title: 'Publication 2',
            authors: ['Author 3', 'Author 4'],
            journal: 'Journal of Technology',
            year: 2022,
        },
        {
            title: 'Publication 3',
            authors: ['Author 5', 'Author 6'],
            journal: 'Conference Proceedings',
            year: 2023,
        },
    ];

    return (
        <div className="publications-container">
            <Title level={2} className="section-title">Publications</Title>
            <List
                itemLayout="vertical"
                dataSource={publications}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="#">{item.title}</a>}
                            description={
                                <div>
                                    <p><b>Authors:</b> {item.authors.join(', ')}</p>
                                    <p><b>Journal:</b> {item.journal}</p>
                                    <p><b>Year:</b> {item.year}</p>
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default PublicationsComponent;

