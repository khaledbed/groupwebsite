// Home2Menu.js

import React from 'react';
import { Layout, Menu } from 'antd';
import './Home2Menu.css';

const { Header } = Layout;

const Home2Menu = () => {
    return (
        <Header className="header">
            <div className="logo">
                <div>Panagiotou Lab</div>
                <div>Microbiome Dynamics</div>
            </div>
            <Menu theme="dark" mode="horizontal" className="menu" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">HOME</Menu.Item>
                <Menu.Item key="2">RESEARCH</Menu.Item>
                <Menu.Item key="3">PEOPLE</Menu.Item>
                <Menu.Item key="4">PUBLICATIONS</Menu.Item>
                <Menu.Item key="5">RESOURCES</Menu.Item>
                <Menu.Item key="6">NEWS</Menu.Item>
                <Menu.Item key="7">JOIN THE LAB</Menu.Item>
                <Menu.Item key="8">CONTACT</Menu.Item>
            </Menu>
        </Header>
    );
}

export default Home2Menu;
