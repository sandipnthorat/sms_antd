import React from 'react';
import { Form, Input, Typography, Button, Select, InputNumber } from 'antd';
const { Option } = Select;

const ContactForm = () => {
    const [form] = Form.useForm();

    const onSubmit = (values) => {
        // console.log('Received values from form: ', values.user);
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const validateMobileNumber = (_, value) => {
        const regex = /^[0-9]{10}$/; // Example: +123456789012
        if (!value || regex.test(value)) {
            return Promise.resolve();
        }
        return Promise.reject('Please enter a valid mobile number with country code');
    };

    return (
        <div>
            <Form
                name="contactForm"
                layout="vertical"
                onFinish={onSubmit}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={["user", "name"]}
                    label="Full Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    rules={[
                        {
                            required: true,
                            type: 'email'
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={["user", "mobileNumber"]}
                    label="Mobile Number"
                    rules={[
                        {
                            required: true,
                        },
                        {
                            validator: validateMobileNumber,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={["user", "company"]}
                    label="Company"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={["user", "designation"]}
                    label="Designation"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={["user", "message"]}
                    label="Message"
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default ContactForm;