
import * as yup from "yup"
const fullnameRegex = /^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/;
export const addNewUser = yup.object().shape({
    taiKhoan: yup
    .string()
    .min(4,"* Tài khoản ít nhất 4 kí tự"),
    matKhau: yup
    .string()
    .min(8,"Mật khẩu ít nhất 8 kí tự"),
    soDt: yup
    .string()
    .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/," *Số điện Thoại Không hợp lệ !"),
    maNhom: yup
    .string()
    .oneOf(['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07'], null,"Vui Lòng Chọn Nhóm")
    .required('Vui lòng chọn nhóm'),
    passwordConfirmation: yup 
    .string()
    .oneOf([yup.ref("matKhau"),null],"* Mật khẩu không giống nhau"), 
    email: yup 
    .string()
    .email("* Email không hợp lệ !"),
    hoTen: yup
        .string()
        .matches(fullnameRegex,"* tên Không hợp !"),
    maLoaiNguoiDung: yup
    .string()
    .oneOf(['Quantri', 'Khachhang'], null,"Vui Lòng Chọn Nhóm")
    .required('Vui lòng loại người dùng'),
    
})