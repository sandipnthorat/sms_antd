import React from 'react';
import { Col, Row, Typography, Divider } from 'antd';

const { Title } = Typography;

const ComponentHeader = ({ title }) => {
    return (
        <Row justify={'center'} style={{ marginBottom: '2em', marginTop: '2em' }}>
            <Col style={{ textAlign: 'center' }} xs={8} sm={8} md={8} lg={8} xl={8}>
                <Divider className='divider_heading'>
                    {/* <Title level={2}>{title}</Title> */}
                    {title}
                </Divider>
            </Col>
        </Row>
    );
};

export default ComponentHeader;