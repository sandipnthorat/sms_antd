import React from 'react';
import { useNavigate } from "react-router-dom";

import { Col, Row, Card, Typography, Button, Flex } from 'antd';

import { FileSearchOutlined } from '@ant-design/icons';
import ComponentHeader from './ComponentHeader';
import { Tilt } from 'react-tilt'

const { Title, Text, Paragraph, Link } = Typography;

const serviceStyle = {
    borderRadius: '5px',
    boxShadow: '5px 5px 8px rgba(0,0,0,0.1)',
    height: '280px',
}

const OurServices = () => {
    const navigate = useNavigate();

    const servicesData = [
        {
            title: "Market Research",
            icon: <FileSearchOutlined />,
            description: 'Syndicate research conducted by SMS market research offers the opportunity for instant solutions. It helps in meeting the business demands and needs of the client. Through its active intelligence model, it creates an environment of research-based study.'
        },
        {
            title: "Syndicate Research",
            icon: <FileSearchOutlined />,
            description: 'Our primary focus is to improve customer business and solve their needs by providing them with the best possible advice and subsequent solution. You may be wondering how to ensure progress and success for your business in a world where all businesses possess the right to gain the best information'
        },
        {
            title: "Custom Research",
            icon: <FileSearchOutlined />,
            description: 'SMS possesses the necessary tools to conduct adequate market research like data analysis, prediction machinery and knowledge about market behaviour'
        }
    ]
    return (
        <div style={{ padding: '10px' }}>
            <ComponentHeader title={"Our Services"} />

            <Row gutter={[18, 16]} className='our_services'>
                {servicesData.map((item, index) => {
                    return <Col key={index} sx={{ p: 6 }} xs={24} sm={24} md={8} lg={8} xl={8}>
                        {/* <Tilt > */}
                        <Card className='card_style'>
                            <Title style={{ textAlign: 'left', marginBottom: '1em', marginTop: '0px' }} level={4}>
                                <FileSearchOutlined className='icon' />
                                {item.title}
                            </Title>

                            <Paragraph>
                                <Text className='para_text'>
                                    {item.description}
                                </Text>
                            </Paragraph>
                            <Button className='view_more_btn' type="primary" block onClick={() => {
                                navigate('/services');
                            }}>
                                View More
                            </Button>
                        </Card>
                        {/* </Tilt> */}
                    </Col>
                })}

            </Row>
        </div>
    );
};

export default OurServices;