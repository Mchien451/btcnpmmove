import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RouteComponent = ({ isAuth, isPrivate, Component, redirectPath, isAdmin }) => {
    const { t, i18n } = useTranslation();
    const { infoUser } = useSelector(state => state.authReducer);
    const token = localStorage.getItem('userToken');

    if (isPrivate) return token ? <Component /> : <Navigate to={redirectPath} />
 
    if (isAuth) return !infoUser ? <Component /> : <Navigate to={redirectPath} />

    if (isAdmin && token) {
        if (!infoUser) return <div className='h-screen w-screen flex justify-center items-center bg-white dark:bg-[#222831]'>
            <div className="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        if (infoUser.maLoaiNguoiDung === 'KhachHang') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1600,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: `${t('Không đủ quyền truy cập !')}`
            })
        }
        return infoUser.maLoaiNguoiDung === 'QuanTri' ? <Component /> : <Navigate to={redirectPath} />
    }
    return (
        <Component />
    );
};

export default RouteComponent;//định nghĩa một component React tên là "RouteComponent".

//Component này được sử dụng để kiểm soát việc định tuyến trong ứng dụng. Nó nhận đầu vào là các thuộc tính như isAuth, isPrivate, Component, redirectPath, isAdmin và dựa trên các giá trị của các thuộc tính này để quyết định xem người dùng có được phép truy cập vào một trang cụ thể hay không.

//Nếu isPrivate là true, component sẽ kiểm tra xem người dùng đã đăng nhập hay chưa thông qua việc kiểm tra localStorage. Nếu đã đăng nhập, component sẽ render Component, nếu chưa đăng nhập, component sẽ định tuyến đến trang redirectPath.

//Nếu isAuth là true, component sẽ kiểm tra xem người dùng đã đăng nhập hay chưa thông qua việc kiểm tra state của authReducer. Nếu chưa đăng nhập, component sẽ render Component, nếu đã đăng nhập, component sẽ định tuyến đến trang redirectPath.

//Nếu isAdmin là true, component sẽ kiểm tra xem người dùng có quyền admin hay không. Nếu người dùng không phải admin, component sẽ định tuyến đến trang redirectPath. Nếu người dùng là admin, component sẽ render Component.

//Nếu không có bất kỳ điều kiện nào được thỏa mãn, component sẽ render Component.