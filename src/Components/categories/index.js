import * as React from "react";
import CategoriesHome from "../home/categoriesHome";
import { useNavigate, useLocation } from "react-router-dom";
import Reports from "./reports";
import { Col, Row } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Categories = (props) => {
  const { state } = useLocation();

  return (
    !state ? <div style={{ padding: '10px' }}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Title level={2}>Industries & Categories</Title>
        </Col>
        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
          <Text >Our database covers 25 major Industries and Categories. We offer multitudes of reports and other information products, covering the cutting-edge and major issues in all industry sectors. Please browse our categories below and feel free to Contact Us for any queries and/or suggestions.</Text>
        </Col>
      </Row>
      <CategoriesHome />
    </div> :
      <Reports categoryId={state.categoryId} />
  )
};

export default Categories;
