// components/HeaderComponent.js

import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3">Features</Menu.Item>
                <Menu.Item key="4">Team</Menu.Item>
                <Menu.Item key="5">Contact</Menu.Item>
            </Menu>
        </Header>
    );
};

export default HeaderComponent;

