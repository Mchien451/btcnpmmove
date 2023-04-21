import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store'
import "../node_modules/react-modal-video/scss/modal-video.scss"
import './i18n';

 

const target = document.getElementById('root'); // lấy element id là root lưu vào target
 
const root = ReactDOM.createRoot(document.getElementById('root'));
//tạo ra một Root trong React tree. Root này được sử dụng để render ứng dụng React
// wrap trong Provider component của Redux để cung cấp store cho toàn bộ ứng dụng
root.render(
 
    <Provider store={store}>
    <App />
    </Provider>
  
,target);


//sử dụng createRoot, việc render sẽ được thực hiện bất đồng bộ, đảm bảo cho hiệu suất tốt hơn khi ứng dụng phức tạp và lớn hơn. 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
