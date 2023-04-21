import React, { useEffect } from 'react';
import { DesktopOutlined, FileOutlined, LoadingOutlined, PicCenterOutlined, PieChartOutlined, PlaySquareOutlined, PlusCircleOutlined, RollbackOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOG_OUT } from '../features/Auth/constants';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import SiderAdmin from '../components/SiderAdmin';
import ButtonDarkMode from '../components/ButtonDarkMode';
const { Header, Content, Sider } = Layout;


const AdminLayout = (props) => {
    
    const { infoUser } = useSelector(state => state.authReducer)
    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const dispatch = useDispatch()
    const token = localStorage.getItem('userToken')
    useEffect(() => {
        if (!token) {
            navigate('/signin')
        }
        window.scrollTo(0, 0);
    }, [token]);
    return (
        <div>
            <Layout style={{ minHeight: '100vh', }}  >
               <SiderAdmin/>
                <Layout className="site-layout">
                    <Header
                        style={{
                            padding: 0,
                            height: 'initial',
                            lineHeight: 0
                        }}
                    >
                        <div className='flex items-center justify-between px-2 py-1'>
                            <NavLink to='/' className='flex items-center hover:text-orange-500'><span className='mr-1'>Quay lại trang chủ</span> <RollbackOutlined /></NavLink>
                            <div className='flex items-center justify-around'>

                                <div className='mr-4 font-bold '>
                                    <NavLink to='/profile' className='flex items-center hover:text-orange-600'>
                                        <img
                                            className='rounded-full border-2 border-orange-600 mr-1'
                                            width={40}
                                            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                                            alt="" />
                                        {infoUser ? <p>{infoUser.taiKhoan}</p> : <div><LoadingOutlined /></div>}</NavLink>
                                </div>
                                <button
                                    onClick={async () => {
                                        Swal.fire({
                                            text: 'Bạn chắc chắn muốn đăng xuất ?',
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#EA580C',
                                            cancelButtonColor: 'grey',
                                            confirmButtonText: 'Log out'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                localStorage.removeItem('userToken');
                                                dispatch({
                                                    type: LOG_OUT
                                                })
                                                Swal.fire({
                                                    title: 'Đăng xuất thành công',
                                                    icon: 'success',
                                                    timer: 1500,
                                                })
                                            }
                                        })
                                    }}
                                    className=' bg-orange-500 leading-9 px-4 hover:bg-orange-700 rounded text-white '>
                                    Đăng xuất
                                </button>
                            </div>
                        </div>
                    </Header>
                    {props.children}
                    
                    <Footer />
                    <ButtonDarkMode/>
                </Layout>
            </Layout>
        </div>
    );
};

export default AdminLayout;


//HOC (Higher-Order Component) là một kỹ thuật được sử dụng trong React để tái sử dụng logic xử lý của các Component. HOC là một function nhận đầu vào là một Component và trả về một Component mới với các tính năng được mở rộng hoặc các hành vi được thêm vào.

// Khi sử dụng HOC, ta có thể chia sẻ các logic xử lý chung giữa các Component khác nhau, tránh việc lặp lại code và làm cho code dễ bảo trì hơn. Một số ví dụ về HOC bao gồm các Component xử lý đăng nhập, xử lý phân trang, xử lý tìm kiếm và xử lý các thông báo.