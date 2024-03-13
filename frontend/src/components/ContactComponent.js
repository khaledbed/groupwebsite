// components/ContactComponent.js

import React from 'react';
import { Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

const ContactComponent = () => {
    return (
        <div className="contact-container">
            <Title level={2} className="section-title">Contact Us</Title>
            <Form className="contact-form">
                <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Invalid email address' }]}>
                    <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
                    <Input.TextArea placeholder="Your Message" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactComponent;

