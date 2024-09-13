import React, { useEffect, useState } from 'react';
import moment from 'moment'
import commonData from "../../../assets/commonData.json"

import { Grid, Row, Col, Typography, Flex } from "antd";
import { Divider } from "antd";
import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    LinkedinOutlined,
    FacebookOutlined,
    InstagramOutlined,
    XOutlined
} from '@ant-design/icons';
const { Title, Text, Paragraph, Link } = Typography;


const Footer = () => {
    const currentYear = moment().format('YYYY');
    const contactDetails = commonData;

    const [footerQuickLinks, setFooterQuickLinks] = useState();
    const [helpDesk, setHelpDesk] = useState();

    useEffect(() => {
        setFooterQuickLinks([
            { key: 1, label: 'Home', url: '/' },
            { key: 3, label: 'Latest Reports', url: 'latestReports' },
            { key: 4, label: 'Services', url: 'services' },
            { key: 2, label: 'Career', url: 'career' },
            { key: 5, label: 'Sitemap', url: '' },
        ])

        setHelpDesk([
            { key: 1, label: 'Privacy Policy', url: '/' },
            { key: 2, label: 'Terms and Conditions', url: '/' },
            { key: 3, label: 'Disclaimer', url: '/' },
            { key: 4, label: 'Refund Policy', url: '/' },
            { key: 5, label: "FAQ's", url: '/' },
        ])
    }, [])


    return (
        <>
            <Row className='footer_style' gutter={[16, 16]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    <Row >
                        <Col span={24} style={{
                            textAlign: 'left'
                        }}>
                            <Text style={{ fontSize: '42px', color: '#fff', fontWeight: 700, letterSpacing: '2px' }}>SMS</Text><br />
                            <Text style={{ color: '#fff', fontWeight: 500, letterSpacing: '2px' }}>Market Research</Text>
                        </Col>
                        <Divider style={{ borderColor: '#fff', margin: '0px' }}></Divider>

                        <Col span={24} style={{ paddingTop: '1.2rem' }}>
                            <EnvironmentOutlined className='contact_icon_dark' />
                            <Text className='contact_label_dark'>{contactDetails.address} </Text>

                        </Col>
                        <Col span={24} style={{ paddingTop: '1.2rem' }}>
                            <  PhoneOutlined className='contact_icon_dark' />
                            <Text className='contact_label_dark'>{contactDetails.mobile} </Text>

                        </Col>
                        <Col span={24} style={{ paddingTop: '1.2rem' }}>
                            <MailOutlined className='contact_icon_dark' />
                            <Text className='contact_label_dark'>{contactDetails.email} </Text>

                        </Col>
                    </Row>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4 }} style={{ paddingTop: '48px' }}>
                    <Row>
                        <Col span={18}>
                            <Text style={{ color: '#fff', fontSize: '22px', fontWeight: 600 }} >
                                Quick Links
                            </Text>
                            <Divider style={{ margin: '5px', borderColor: '#fff', width: '60px' }}></Divider>
                        </Col>
                        {footerQuickLinks && footerQuickLinks.map(e => {
                            return <Col key={e.key} span={24} style={{ padding: 3 }}>
                                <Text className='contact_label_dark' >
                                    {e.label}
                                </Text>
                            </Col>
                        })}
                    </Row>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4 }} style={{ paddingTop: '48px' }}>
                    <Row>
                        <Col span={18}>
                            <Text style={{ color: '#fff', fontSize: '22px', fontWeight: 600 }} >
                                Help Desk
                            </Text>
                            <Divider style={{ margin: '5px', borderColor: '#fff' }}></Divider>
                        </Col>
                        {helpDesk && helpDesk.map(e => {
                            return <Col key={e.key} span={24} style={{ padding: 3 }}>
                                <Text className='contact_label_dark' >
                                    {e.label}
                                </Text>
                            </Col>
                        })}
                    </Row>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }} lg={{ span: 10 }}>
                    <iframe width="100%" height="330" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=pune+(SMS%20market%20research)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
                </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
                <Col span={24}>
                    <Text className='copy_rights'>© {currentYear} {contactDetails.creditURL} - All rights reserved</Text>
                </Col>
            </Row>
        </>
    );
};

export default Footer;