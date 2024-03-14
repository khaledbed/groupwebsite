// components/FooterComponent.js

import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const FooterComponent = () => {
    return (
        <Footer className="footer">
            <div className="footer-content">
                <Text className="footer-text" style={{ textAlign: 'center' }}>Research Group ©2024 Created by Khaled </Text>
            </div>
        </Footer>
    );
};

export default FooterComponent;
