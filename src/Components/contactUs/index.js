import * as React from "react";
import contactDetail from '../../assets/commonData.json'
import { Col, Row, Card, Typography } from 'antd';
import ContactForm from './contactForm';
import {
  EnvironmentOutlined,
  MobileOutlined,
  MailOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
  SmileFilled,
  SmileOutlined,
  PhoneOutlined
} from '@ant-design/icons';
const { Title, Text, Paragraph, Link } = Typography;

// import { SmileFilled, SmileOutlined } from '@ant-design/icons';


const linkStyle = {
  color: "#4f4f4f",
  margin: '0px 10px'
}

const ContactUs = (props) => {

  const contactDetails = contactDetail


  const SideCard = () => {
    return <>
      <Row justify="center" align="middle">
        <Col style={{ textAlign: 'left', marginBottom: '2em' }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <Title style={{ marginBottom: '10px' }} level={2}>We’re here to help</Title>
          <Text strong>Need more information on syndicated or custom reports? Have other questions? Drop us a line. Our team of Market Research experts are here to help.</Text>
        </Col>

      </Row>

      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <Text className="contact_label_light" > Don’t like forms? No problem. Contact us directly by email:</Text>
          <Paragraph style={{ marginTop: '10px' }} copyable={{
            text: contactDetails.email,
          }}>
            <MailOutlined className="contact_icon_light" />
            <Text className="contact_label_light">{contactDetails.email} </Text>
          </Paragraph>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <Paragraph copyable={{
            text: contactDetails.address,
          }}>
            <EnvironmentOutlined className="contact_icon_light" />
            <Text className="contact_label_light">{contactDetails.address} </Text>
          </Paragraph>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <Paragraph copyable={{
            text: contactDetails.mobile,
          }}>
            {/* <MobileOutlined className="contact_icon_light" /> */}
            <PhoneOutlined className="contact_icon_light" />
            <Text className="contact_label_light">{contactDetails.mobile} </Text>
          </Paragraph>
        </Col>

        <Col style={{ textAlign: 'right' }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <Link style={linkStyle} href="https://in.linkedin.com/" target="_blank">
            <LinkedinOutlined />
          </Link>

          <Link style={linkStyle} href="https://facebook.com" target="_blank">
            <FacebookOutlined />
          </Link>

          <Link style={linkStyle} href="https://instagram.com" target="_blank">
            <InstagramOutlined />
          </Link>

          <Link style={linkStyle} href="https://x.com" target="_blank">
            <XOutlined />
          </Link>



        </Col>

        {/* <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <iframe width="100%" height="330" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=pune+(SMS%20market%20research)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
        </Col> */}
      </Row>

    </>
  }

  return <>
    <Row justify={'center'}>
      <Col style={{ textAlign: 'center', marginBottom: '1em' }} xs={24} sm={24} md={12} lg={12} xl={12}>
        <Title level={2}>Contact Us</Title>
        <Text style={{ width: '100px', wordWrap: 'break-word' }}>Partner with us to leverage the power of market research and gain a competitive edge.  Contact us today to discuss your specific needs and unlock the valuable insights waiting to be discovered.</Text>
      </Col>
    </Row>


    <Row gutter={[16, 16]}>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
        <Row justify="center" align="middle">
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }}>
            <Card
              style={{
                boxShadow: '5px 5px 8px rgba(0,0,0,0.1)',
              }}
            >
              <ContactForm />
            </Card>
          </Col>
        </Row>

      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
        {/* <Card
          style={{ boxShadow: '5px 5px 8px rgba(0,0,0,0.1)' }}
        >
        </Card> */}
        <SideCard />
      </Col>
    </Row>
  </>
};

export default ContactUs;