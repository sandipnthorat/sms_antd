import React, { useEffect, useState } from 'react';
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
import { Col, Row, Typography, Menu, Divider } from 'antd';
const { Title, Text } = Typography;

const Filter = ({ data, selectedCategory }) => {
    const catIcons = [faShieldHalved,
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
        faIndustry]
    const [listItems, setListItems] = useState();
    useEffect(() => {
        const tempData = [];
        data.forEach(e => {
            tempData.push({
                key: e.key,
                label: e.label,
                icon: <FontAwesomeIcon size="lg" icon={catIcons[e.key]} />
            })
        });
        setListItems(tempData)
    }, [data])

    return (
        <>
            <Row className='filter_card_heading'>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ textAlign: 'center' }}>
                    <Title className='card_title' level={4}>Categories</Title>
                </Col>
            </Row>

            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    {<Menu
                        defaultSelectedKeys={['1']}
                        style={{
                            width: '100%',
                        }}
                        onClick={(e) => selectedCategory(e.key)}
                        items={listItems}
                    >
                    </Menu>}
                </Col>
            </Row>
        </>
    );
};

export default Filter;