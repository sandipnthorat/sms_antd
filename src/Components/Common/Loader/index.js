import React from 'react';
import { Alert, Flex, Spin } from 'antd';

const contentStyle = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
};

const content = <div style={contentStyle} />;

const Loader = ({ size, isContent }) => {
    return (
        <Flex gap="middle" vertical>
            {isContent ? <Spin tip="Loading..." size={size}>{content}</Spin> : <Spin tip="Loading..." size={size}></Spin>}
        </Flex>
    );
};

export default Loader;