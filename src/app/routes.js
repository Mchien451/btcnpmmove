import Home from '../features/Booking/Home'
import Detail from '../features/Booking/Detail'
import Seats from '../features/Booking/Seats'
import Signin from '../features/Auth/Signin'
import Signup from '../features/Auth/Signup'
import Profile from '../features/Auth/Profile'
import DashBoard from '../features/Admin/DashBoard'
import User from '../features/Admin/User'
import Films from '../features/Admin/Films'
import Showtimes from '../features/Admin/Showtimes'
import Addnew from '../features/Admin/Addnew'
import Edit from '../features/Admin/Edit'
import Adduser from '../features/Admin/User/Adduser'
import Edituser from '../features/Admin/User/Edituser'
export const routes = [
    { path: '/', component: Home, isPrivate: 0, redirectPath: '/signin' },
    { path: '/detail/:id', component: Detail },
    { path: '/seats/:id', component: Seats },
    { path: '/signin', component: Signin, isAuth: true, redirectPath: '/' },
    { path: '/signup', component: Signup },
    { path: '/profile', component: Profile },
    { path: '/admin', component: DashBoard, isAdmin: true, redirectPath: '/' },
    { path: '/admin/user', component: User, isAdmin: true, redirectPath: '/' },
    { path: '/admin/films', component: Films, isAdmin: true, redirectPath: '/' },
    { path: '/admin/films/addnew', component: Addnew, isAdmin: true, redirectPath: '/' },
    { path: '/admin/films/edit/:id', component: Edit, isAdmin: true, redirectPath: '/' },
    { path: '/admin/showtimes/:id', component: Showtimes, isAdmin: true, redirectPath: '/' },
    {path:  '/admin/user/addnew', component: Adduser, isAdmin: true, redirectPath: '/'},
    {path:  '/admin/user/edit/:id/:GP', component: Edituser, isAdmin: true, redirectPath: '/'}
]

// //Tuyến đường mặc định cho trang chủ ('/') với thành phần Home và không yêu cầu đăng nhập (isPrivate: 0). Nếu người dùng chưa đăng nhập, sẽ chuyển hướng đến trang đăng nhập ('/signin').
// Tuyến đường cho trang chi tiết với thành phần Detail và không yêu cầu quyền truy cập.
// Tuyến đường cho trang chọn ghế với thành phần Seats và không yêu cầu quyền truy cập.
// Tuyến đường cho trang đăng nhập với thành phần Signin và yêu cầu đăng nhập (isAuth: true). Nếu người dùng đã đăng nhập, sẽ chuyển hướng đến trang chủ ('/').
// Tuyến đường cho trang đăng ký với thành phần Signup và không yêu cầu quyền truy cập.
// Tuyến đường cho trang thông tin người dùng với thành phần Profile và yêu cầu đăng nhập (isAuth: true).
// Tuyến đường cho trang quản trị viên với thành phần DashBoard và yêu cầu quyền quản trị viên (isAdmin: true). Nếu người dùng không phải quản trị viên, sẽ chuyển hướng đến trang chủ ('/').
// Tuyến đường cho trang quản lý người dùng với thành phần User và yêu cầu quyền quản trị viên.
// Tuyến đường cho trang quản lý phim với thành phần Films và yêu cầu quyền quản trị viên.
// Tuyến đường cho trang thêm mới phim với thành phần Addnew và yêu cầu quyền quản trị viên.
// Tuyến đường cho trang chỉnh sửa thông tin phim với thành phần Edit và yêu cầu quyền quản trị viên.
// Tuyến đường cho trang quản lý lịch chiếu với thành phần Showtimes và yêu cầu quyền quản trị viên.
// Tuyến đường cho trang thêm mới người dùng với thành phần Adduser và yêu cầu quyền quản trị viên.
// Tuyến đường cho trang chỉnh sửa thông tin người dùng với thành phần Edituser và yêu cầu quyền quản trị viên.