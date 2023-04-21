const reportWebVitals = onPerfEntry => { //hàm callback nhận các thông tin hiệu suất (performance) của trang web
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); //Cumulative Layout Shift (CLS) - độ chuyển động của giao diện trang web
      getFID(onPerfEntry); //First Input Delay (FID) - thời gian phản hồi khi người dùng tương tác lần đầu tiên với trang web.
      getFCP(onPerfEntry);//First Contentful Paint (FCP) - thời gian nội dung đầu tiên xuất hiện trên trang web.
      getLCP(onPerfEntry); //Largest Contentful Paint (LCP) - thời gian hiển thị nội dung lớn nhất trên trang web
      getTTFB(onPerfEntry); //Time to First Byte (TTFB) - thời gian mà trình duyệt nhận được phản hồi từ máy chủ web đầu tiên.
    });
  }
};

export default reportWebVitals; //truyền vào hàm callback onPerfEntry 
