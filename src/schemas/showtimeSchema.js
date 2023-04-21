import * as yup from 'yup';

//xác thực dữ liệu đầu vào của một đối tượng showtimeSchema
export const showtimeSchema = yup.object().shape({
    ngayChieuGioChieu: yup
        .string()
        .required('Vui lòng chọn ngày giờ chiếu'),// requiured đảm bảo rằng dữ liệu đầu vào không được trống
    maRap: yup
        .string()
        .required('Vui lòng chọn cụm rạp'),
    maHeThongRap: yup
        .string()
        .required('Vui lòng chọn hệ thống rạp'),
})
