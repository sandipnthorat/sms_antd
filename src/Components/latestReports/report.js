import "../../App.css"
import React, { useEffect, useState } from 'react';
import reportData from "../../assets/report_data.json"
import ContactForm from "../contactUs/contactForm";

import { Col, Row, Card, Typography, Tabs, Divider, Flex } from 'antd';
import {
    FilePdfOutlined,
    FilePptOutlined,
    FileExcelOutlined,
    FileWordOutlined
} from '@ant-design/icons';


const { Title, Text } = Typography

const titleOption = {
    marginRight: '1rem',
    fontWeight: 500
}

const Report = ({ id }) => {
    const [data, setData] = useState();

    useEffect(() => {
        const temp = reportData.filter(e => e.reportId === id)
        setData(temp[0])
    }, [id])

    const onChange = (key) => {
        // console.log(key);
    };

    const DescriptionComponent = () => {
        return <>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Card>
                        {data && <div dangerouslySetInnerHTML={{ __html: data.description }}></div>}
                    </Card>
                </Col>
            </Row>
        </>
    }

    const TableOfContent = () => {
        return <Row>
            <Card>
                <Col xs={24} sm={24} md={24} lg={24}>
                    Table of Content
                </Col>
            </Card>
        </Row>
    }

    const RequestSample = () => {
        return <>
            <Row>
                <Card>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Text strong>Report Title:</Text>
                        <Text>{data.reportTitle}</Text>
                    </Col>

                    <Col style={{ marginTop: '1rem' }} xs={24} sm={24} md={12} lg={12} xl={12}>
                        <ContactForm />
                    </Col>
                </Card>
            </Row>
        </>
    }

    const items = [
        {
            key: '1',
            label: 'Description',
            children: <DescriptionComponent />,
        },
        {
            key: '2',
            label: 'Table Of Content',
            children: <TableOfContent />,
        },
        {
            key: '3',
            label: 'Request for Sample',
            children: <RequestSample />,
        },
    ];


    return (
        <>
            {data && <Row gutter={[16, 18]}>
                <Card>
                    <Col style={{ marginBottom: '1rem' }} xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Text strong>{data.reportTitle}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Row gutter={[0, 10]}>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                <Text style={titleOption}>Report ID : 248750</Text>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                <Text style={titleOption}>No. of Pages : 374</Text>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                <Text style={titleOption}>Format :
                                    <FilePdfOutlined style={{ fontSize: '25px', margin: '0px 4px' }} />
                                    <FilePptOutlined style={{ fontSize: '25px', margin: '0px 4px' }} />
                                    <FileExcelOutlined style={{ fontSize: '25px', margin: '0px 4px' }} />
                                    <FileWordOutlined style={{ fontSize: '25px', margin: '0px 4px' }} />
                                </Text>
                            </Col>
                        </Row>
                        <Divider />
                    </Col>
                </Card>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Tabs type="card" size='large' defaultActiveKey="1" items={items} onChange={onChange} />
                </Col>
            </Row>}
        </>
    );
};

export default Report;