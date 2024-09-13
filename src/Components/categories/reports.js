import Filter from './filter';
import categoriesList from "../../assets/categoriesList"
import allReports from "../../assets/report_data.json"
// import reportData from "../../assets/report_data.json"

import { Card, Col, Row, Typography, Input } from 'antd';
import React, { useState, useEffect } from 'react';

const { Search } = Input;
const { Title, Text } = Typography;
const Reports = (props) => {
    const { categoryId } = props;
    const [reportsData, setReportsData] = useState([])

    const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId)

    // useEffect(() => {
    //     // console.log('selectedCategoryId -->', categoriesList);
    //     setSelectedCategoryId(selectedCategoryId)
    // }, [selectedCategoryId])

    useEffect(() => {
        const data = allReports.filter(e => e.categoryId === selectedCategoryId);
        setReportsData(data);
    }, [])

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const selectedCategory = key => {
        setSelectedCategoryId(key);
        const data = allReports.filter(e => Number(e.categoryId) === Number(key));
        console.log(key, data, allReports);

        setReportsData(data)
    }

    return (
        <>
            <Row justify={'center'} style={{ margin: '1rem' }}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Search
                        placeholder="Search Reports"
                        onSearch={onSearch}
                        size="large"
                        enterButton
                    />
                </Col>
            </Row>
            <Row gutter={[10, 10]} className='report_page'>

                <Col xs={24} sm={24} md={6} lg={6} xl={6} className='filter_card_col'>
                    <Card className='filter_card'>
                        {categoriesList && <Filter data={categoriesList} selectedCategory={selectedCategory} />}
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={18} lg={18} xl={18} className='report_card_col'>
                    <Row justify={'center'}>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Title level={4}>All Market Report list</Title>
                        </Col>
                    </Row>
                    <Card className='report_card'></Card>
                </Col>
            </Row>
        </>
    );
};

export default Reports;