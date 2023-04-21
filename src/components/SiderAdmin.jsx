import { PlaySquareOutlined, PlusCircleOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        key: '/admin',
        icon: <AppstoreOutlined />,
        label: "Tổng quan"
    },
    {
        key: '/admin/user',
        icon: <UserOutlined />,
        label: "Người dùng"
    },
    {
        key: '/admin/films',
        icon: <PlaySquareOutlined />,
        label: "Danh sách phim",
    },
    {
        key: '/admin/films/addnew',
        icon: <PlusCircleOutlined />,
        label: "Thêm phim mới",
    }
];
const SiderAdmin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    return (
        <Sider collapsed={true} onCollapse={(value) => setCollapsed(value)}>
            <div>
                <img width={45} className='mb-4 mt-6 mx-auto' src="https://movie-booking-project.vercel.app/img/headTixLogo.png" alt="" />
            </div>
            <Menu theme="dark" defaultSelectedKeys={[window.location.pathname]} mode="inline"
                onClick={({ key }) => {
                    navigate(key)
                }}
                items={items} />
        </Sider>
    );
};

export default memo(SiderAdmin);