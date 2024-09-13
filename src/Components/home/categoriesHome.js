// import categoriesData from "../../assets/categoriesList"
import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShieldHalved,
    faTractor,
    faTruckPlane,
    faBusinessTime,
    faFlaskVial,
    faCartShopping,
    faBolt,
    faBurger,
    faLaptop,
    faPersonDigging,
    faBriefcaseMedical,
    faUserTie,
    faStethoscope,
    faCarSide,
    faIndustry
} from '@fortawesome/free-solid-svg-icons'



import { Col, Row, Card, Typography, Button, Flex, Image, Divider } from 'antd';
import reportIcon from "../../assets/report.svg"
import ComponentHeader from './ComponentHeader';

const { Title, Text, Paragraph, Link } = Typography;

const Categories = () => {
    const navigate = useNavigate();

    const catData = [
        { id: 1, title: 'Agriculture', icon: faTractor },
        { id: 2, title: 'Aerospace and Defence', icon: faShieldHalved },
        { id: 3, title: 'Automotive and Transportation', icon: faTruckPlane },
        { id: 4, title: 'Business and Finance', icon: faBusinessTime },
        { id: 5, title: 'Chemical and Materials', icon: faFlaskVial },
        { id: 6, title: 'Consumer Goods and Retails', icon: faCartShopping },
        { id: 7, title: 'Energy and Power', icon: faBolt },
        { id: 8, title: 'Food and Beverages', icon: faBurger },
        { id: 9, title: 'IT and Telecommunication', icon: faLaptop },
        { id: 10, title: 'Manufacturing and Construction', icon: faIndustry },
        { id: 11, title: 'Pharmaceuticals and Healthcare', icon: faBriefcaseMedical },
        { id: 12, title: 'Service and Software', icon: faUserTie },
        { id: 13, title: 'Travel and Tourism', icon: faCarSide },
        { id: 14, title: 'Medical Devices', icon: faStethoscope },
    ]

    return (
        <div style={{ padding: '10px' }}>

            <ComponentHeader title={"Categories"} />

            <Row gutter={[18, 25]} className='category_style'>
                {catData.map((item, index) => {

                    return <Col key={index} style={{ textAlign: 'left' }} xs={24} sm={8} md={6} lg={6} xl={6}>
                        <div className='cat_card' onClick={() => navigate('/categories', { state: { categoryId: item.id } })}>
                            <Link>
                                <Row align="middle" gutter={[20, 5]}>
                                    <Col span={6} style={{ textAlign: 'center' }}>
                                        <div className='icon_circle'>
                                            <FontAwesomeIcon className='fa-2x'
                                                icon={item.icon} />
                                        </div>
                                    </Col>
                                    <Col span={18} className='link_style'>
                                        {item.title}
                                    </Col>
                                </Row>
                            </Link>
                        </div>
                    </Col>
                })}
            </Row>
        </div >
    );
};

export default Categories;