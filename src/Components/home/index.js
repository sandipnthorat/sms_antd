import reportData from "../../assets/report_data.json"
import React, { useState, useRef } from "react";
import { Col, Row, Card, Typography } from 'antd';
import smsLogo from "../../assets/logo_light.png"
import { Image } from "antd";
import OurServices from "./ourServices";
import PublishedReports from "./publishedReports";
import Categories from "./categoriesHome";
import { Button } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileLines,
  faIndustry,
  faCircleArrowUp,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;

const { Title, Text, Paragraph, Link } = Typography;


function Home(props) {
  const navigate = useNavigate();

  const orangeTileData = [
    {
      title: 'Market Research Reports',
      count: 10000,
      icon: faFileLines
    },
    {
      title: 'Industry Sectors ',
      count: 100,
      icon: faIndustry
    },
    {
      title: 'Upcoming Reports',
      count: 300,
      icon: faCircleArrowUp
    }
  ]

  const ref = useRef(null);
  // const handleNavClick = () => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <>
      <Row align={'center'} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }}>
          {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
          <Search
            placeholder="Search Reports"
            onSearch={onSearch}
            size="large"
            enterButton
          />
        </Col>
      </Row>
      {/* <button onClick={handleNavClick}>Scroll to element</button> */}
      <Card className="home_top_filled_tile_card">
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 9 }} xl={{ span: 9 }}>
            <Row >
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                <Title className="heading_title_light" level={3}>
                  SMARTER WAY TO DO MARKET RESEARCH
                </Title>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                <Text className="body_text_light" >
                  We will Provide you Best Solution for all your Customized Requirements,
                  We are leading provider of Business Research and Consulting, thus your right choice !
                </Text>
              </Col>
            </Row>
            <Row justify={'center'}>
              <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 4 }}>
                <Button onClick={() => {
                  navigate('/contactus');
                }} type="primary" shape="round" icon={<FontAwesomeIcon className='fa-1x' icon={faPhone} />} size={'large'}>
                  SCHEDULE A CALL
                </Button>
              </Col>
            </Row>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 15 }} lg={{ span: 15 }} xl={{ span: 15 }} style={{ paddingLeft: '10px' }}>
            <Row gutter={[20, 5]} justify='space-around' align='middle' style={{ height: '100%' }}>

              {orangeTileData && orangeTileData.map((e, i) => {
                return <Col key={i} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }}>
                  <Row justify="center" align="middle">
                    <Col xs={{ span: 5 }} sm={{ span: 5 }} md={{ span: 5 }} lg={{ span: 5 }} xl={{ span: 5 }} className="align_center">
                      <div className="icon_circle">
                        <FontAwesomeIcon className='fa-2x' icon={e.icon} />
                      </div>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} className="align_center">
                      <Title className="heading_title_light" level={1}>
                        {e.count.toLocaleString()}+
                      </Title></Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} className="align_center">
                      <Title className="heading_title_light" level={5}>
                        {e.title}
                      </Title>
                    </Col>
                  </Row>
                </Col>
              })}

            </Row>
          </Col>
        </Row>
      </Card>
      {/* <div ref={ref}>Some content here</div> */}

      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <PublishedReports />
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Categories />
        </Col>
      </Row>

      <Row style={{ marginBottom: '4rem' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <OurServices />
        </Col>
      </Row>




    </>)
}

export default Home;
