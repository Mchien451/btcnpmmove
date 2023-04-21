import * as yup from 'yup';

const regexTrailerYoutube = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?(?:\S+)?(?:\&\S+)?(?:\?t=\S+)?&?(?:feature=\S+)?&?(?:\S+)?(?:\#\S+)?(?:\&\S+)?(?:\?t=\S+)?(?:\#\S+)?$/;

export const editFilmSchema = yup.object().shape({
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
        .required('Vui lòng chọn ngày tháng'),
})
