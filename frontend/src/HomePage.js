// src/HomePage.js

import React from 'react';
import { Layout, Menu, Typography, Row, Col, Card, Button, Avatar, Space, Carousel,Divider } from 'antd';
import { EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';
import { useSpring, animated } from 'react-spring';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const HomePage = () => {
    const fadeAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

    return (
        <Layout className="layout" style={{ minHeight: '100vh' }}>
            <Header style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Publications</Menu.Item>
                    <Menu.Item key="3">Team</Menu.Item>
                    {/* Add more menu items as needed */}
                </Menu>
            </Header>
            <Content style={{ padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="site-layout-content" style={{ width: '100%', padding: '50px' }}>
                    <Carousel autoplay effect="fade" style={{ marginBottom: '50px' }}>
                        <div>
                            <img src="https://via.placeholder.com/800x400" alt="Research Group" style={{ width: '100%', borderRadius: '8px' }} />
                        </div>
                        {/* Add more carousel items here */}
                    </Carousel>
                    <Row gutter={[32, 32]} justify="center" align="middle">
                        <Col xs={{ span: 24 }} md={{ span: 12 }}>
                            <animated.div style={fadeAnimation}>
                                <Title level={1} style={{ marginBottom: '24px' }}>Welcome to Our Research Group</Title>
                                <Text style={{ fontSize: '18px', marginBottom: '32px', display: 'block' }}>
                                    We are a dedicated team of researchers working towards innovative solutions in <b>Science and Technology</b>.
                                </Text>
                            </animated.div>
                        </Col>
                    </Row>
                    <Divider />
                    <Row gutter={[32, 32]} justify="center">
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <Card bordered={false}>
                                <Space direction="vertical">
                                    <EnvironmentOutlined style={{ fontSize: '24px' }} />
                                    <Title level={3}>Our Mission</Title>
                                    <Text>
                                        Our mission is to conduct groundbreaking research and contribute to the advancement of knowledge in our field.
                                    </Text>
                                </Space>
                            </Card>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <Card bordered={false}>
                                <Space direction="vertical">
                                    <CalendarOutlined style={{ fontSize: '24px' }} />
                                    <Title level={3}>Our Vision</Title>
                                    <Text>
                                        Our vision is to become a leading research group recognized for our impactful contributions and innovative solutions.
                                    </Text>
                                </Space>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={[32, 32]} justify="center">
                        <Col xs={{ span: 24 }}>
                            <Title level={2}>Our Team</Title>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <Card
                                hoverable
                                bordered={false}
                                cover={<Avatar size={200} src="https://via.placeholder.com/300" />}
                                actions={[
                                    <Button type="primary">View Profile</Button>
                                ]}
                            >
                                <Card.Meta title="John Doe" description="Research Scientist" />
                            </Card>
                        </Col>
                        {/* Add more team members here */}
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor: 'transparent', color: 'white', position: 'absolute', bottom: 0, width: '100%' }}>Research Group ©2024 Created by You</Footer>
        </Layout>
    );
};

export default HomePage;

