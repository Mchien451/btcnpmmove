import { https } from "../../../serivce/config";

export const AuthService = {
    signIn: (data) => {
        const url = 'QuanLyNguoiDung/DangNhap';
        return https.post(url, data)
    },
    // fetchProfile để lấy thoogn tin người dùng nếu họ đã đăng nhập trước đó rồi. ( lưu dưới localStorage giờ lấy lên dùng)
    fetchProfile: () => {
        const url = 'QuanLyNguoiDung/ThongTinTaiKhoan';
        // do thằng này là trường hợp đặc biệt nên ghi đầy đủ, lấy localStorage mới nhất 
        return https.post(url, undefined,
            {
                headers: {
                    TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y',
                    Authorization: "Bearer " + localStorage.getItem('userToken')
                }
            })
    },

    signUp: (data) => {
        const url = "QuanLyNguoiDung/DangKy";
        return https.post(url, data);
    },
    updateUser: (data) => {
        const url = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
        return https.put(url, data, {
            headers: {
                TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y',
                Authorization: "Bearer " + localStorage.getItem('userToken')
            }
        });
    }
}