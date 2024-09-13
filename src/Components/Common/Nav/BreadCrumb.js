import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from "@ant-design/icons"
import { titleCase } from '../../../Utility/util';

const BreadCrumb = () => {
    const location = useLocation();

    const pathSnippets = location.pathname.split('/').filter(i => i);

    const breadcrumbItems = pathSnippets.map((snippet, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            snippet !== 'home' && <Breadcrumb.Item key={index}>
                <Link to={url}>{titleCase(snippet)}</Link>
            </Breadcrumb.Item>
        );
    });

    return (
        <Breadcrumb style={{ margin: '10px 15px' }}>
            {pathSnippets.length !== 0 && pathSnippets[0] !== 'home' && <Breadcrumb.Item key={'home'}>
                <Link to={'/home'}><HomeOutlined /> {'Home'}</Link>
            </Breadcrumb.Item>}
            {breadcrumbItems}
        </Breadcrumb>
    );
};

export default BreadCrumb;