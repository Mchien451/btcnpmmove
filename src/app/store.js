import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { bookingReducer } from "../features/Booking/bookingSlice";
import { authReducer } from "../features/Auth/authSlice";
import { adminReducer } from "../features/Admin/adminSlice";

const rootReducer = combineReducers({
    bookingReducer,
    authReducer,
    adminReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;


// Đoạn mã này xuất ra một cửa hàng Redux đã được cấu hình sử dụng hàm createStore từ thư viện redux.

// Hàm combineReducers được sử dụng để kết hợp nhiều reducers thành một hàm reducer duy nhất, được truyền vào hàm createStore với tên rootReducer. Trong trường hợp này, bookingReducer, authReducer, và adminReducer là các reducers sẽ quản lý các phần tương ứng của trạng thái ứng dụng.

// Hàm composeEnhancers được sử dụng để thêm tiện ích mở rộng Redux DevTools vào cửa hàng, cho phép dễ dàng gỡ lỗi và kiểm tra các thay đổi trạng thái. Nếu tiện ích mở rộng không được cài đặt, thì hàm compose sẽ được sử dụng thay thế.

// Cuối cùng, hàm applyMiddleware được sử dụng để áp dụng middleware vào cửa hàng. Trong đoạn mã này, middleware thunk được sử dụng để cho phép các hoạt động bất đồng bộ được phát đi trong Redux. Cửa hàng được xuất ra như là một bản xuất mặc định của module.