import React from 'react';
import { useNavigate } from "react-router-dom";

import { Col, Row, Card, Typography, Button, Flex } from 'antd';
import Categories from './categoriesHome';
import ComponentHeader from './ComponentHeader';


const { Title, Text, Paragraph, Link } = Typography;

const PublishedReports = () => {
    const navigate = useNavigate();
    const publishedReports = [
        {
            industry: 'Chemicals & Materials',
            title: 'Xenon Gas Market',
            description: 'The global xenon gas market size is anticipated to reach USD 162.9 million in 2024. The industry is projected to surge at a CAGR of 5.2% during the forecast period from 2024 to 2034.',
            reportId: 1
        },
        {
            industry: 'Industrial Automation',
            title: 'Biocomposite Market',
            description: 'The global biocomposite market size reached USD 28.4 billion in 2023. Over the forecast period, the value is anticipated to rise at 15.5% CAGR.',
            reportId: 2
        },
        {
            industry: 'Technology',
            title: 'I/O-Link Market',
            description: 'I/O-Link market is estimated to be worth USD 9,458.5 million in 2024 while reaching the value of USD 38,056.7 million by 2034.',
            reportId: 3
        },
        {
            industry: 'Chemicals & Materials',
            title: 'Argon Gas Market',
            description: 'The global argon gas market size is estimated to be worth USD 241.3 million in 2024. It is anticipated to reach a value of USD 408',
            reportId: 4
        },
    ]
    return (
        <div style={{ padding: '10px' }}>
            <ComponentHeader title={"Published Reports"} />

            <Row gutter={[18, 16]} className='published_reports_style'>
                {publishedReports.map((item, index) => {
                    return <Col key={index} xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card className='report_card'>
                            <Text>{item.industry}</Text>
                            <Title className='title_style' level={5}
                                onClick={() => {
                                    navigate("/latestReports", { state: { reportId: item.reportId } })
                                }}>
                                {item.title}
                            </Title>
                            <Text ellipsis={false} className='des_text'>{item.description}</Text>
                        </Card>
                    </Col>
                })}

            </Row>

            <Row justify={'center'} style={{ margin: '2em 0px' }}>
                <Col xs={18} sm={18} md={6} lg={6} xl={6}>
                    <Flex
                        vertical
                        // gap="small"
                        style={{
                            width: '100%',
                        }}
                    >
                        <Button type="primary" ghost onClick={() => {
                            navigate("/latestReports")
                        }}>
                            Explore published Reports
                        </Button>

                    </Flex>
                </Col>
            </Row>
        </div >
    );
};

export default PublishedReports;