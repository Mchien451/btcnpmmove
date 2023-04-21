import * as yup from 'yup';

const regexTrailerYoutube = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?(?:\S+)?(?:\&\S+)?(?:\?t=\S+)?&?(?:feature=\S+)?&?(?:\S+)?(?:\#\S+)?(?:\&\S+)?(?:\?t=\S+)?(?:\#\S+)?$/;
//https://www.youtube.com/watch?v=XXXXXXXXXXX&t=XXs
// https://www.youtube.com/watch?v=XXXXXXXXXXX&t=XX
// https://www.youtube.com/watch?v=XXXXXXXXXXX
// https://www.youtube.com/embed/XXXXXXXXXXX
// https://youtu.be/XXXXXXXXXXX

const regexDDmmYYYY = /^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/\d{4}$/;
/*
    This regular expression matches dates in the format of DD/MM/YYYY, where:
    DD represents the day of the month, from 01 to 31.
    MM represents the month of the year, from 01 to 12.
    YYYY represents the year, from 0001 to 9999.
*/

export const addnewSchema = yup.object().shape({
    tenPhim: yup
        .string()
        .min(4, 'Tên phim phải có ít nhất 4 kí tự')
        .required('Vui lòng nhập tên phim'),
    trailer: yup
        .string()
        .matches(regexTrailerYoutube, { message: "Link trailer youtube không hợp lệ" })
        .required('Vui lòng nhập link youtube trailer'),
    moTa: yup
        .string()
        .min(10, 'Mô tả phải có ít nhất 10 kí tự')
        .required('Vui lòng nhập mô tả'),
    ngayKhoiChieu: yup
        .string()
        // .matches(regexDDmmYYYY, { message: "Định dạng phải là DD/MM/YYYY" })
        .required('Vui lòng chọn ngày tháng'),
    hinhAnh: yup
        .mixed().required('Vui lòng chọn hình ảnh'),
    maNhom: yup
    .string()
    .required('Vui lòng chọn mã nhóm')
})
