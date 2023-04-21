import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from './app/routes'
import Loading from "./components/Loading";
import NotFoundPage from "./components/NotFoundPage"; //URL không tương  Route nào, NotFoundPage hiển thị.
import { fetchProfile } from "./features/Auth/thunk"; // lấy thông tin người dùng từ máy chủ
import RouteComponent from "./HOCs/AppRoute";

function App() {
  const dispatch = useDispatch();
  // nếu user đã đăng nhập website trước đó thì moi cái token ra ( dưới localStorage ) để đăng nhập
  // dù user đăng nhập bất kì trang nào thì ta cũng cho user trạng thái đang đăng nhập
  useEffect(() => { //sử dụng Hook useEffect để gọi hàm fetchProfile mỗi khi component hiển thị lần đầu tiên
    dispatch(fetchProfile);
  }, [])
  const { isLoading } = useSelector(state => state.bookingReducer);
  //useSelector Hook lấy isLoading từ store của Redux để hiển thị trạng thái loading khi isLoading được đặt là true
  return (
    <BrowserRouter>
      {isLoading && <Loading />}
      <Routes>
        {routes.map(({ path, component: Component, isPrivate, isAuth, redirectPath, isAdmin }) =>
          <Route key={path} path={path} element={<RouteComponent isPrivate={isPrivate} isAdmin={isAdmin} isAuth={isAuth} Component={Component} redirectPath={redirectPath} />} />
        )}
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    // BrowserRouter và Routes từ react-router-dom để xác định các route và component được hiển thị tương ứng 
  );
}

export default App;
 // hiển thị giao diện cho người dùng