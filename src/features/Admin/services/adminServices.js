import { https } from "../../../serivce/config";
export const adminService = {
    fetchMoviesAdmin: (groupID, name) => { //lấy danh sách phim dựa trên ID nhóm và tên phim.
        if (name.trim() === '') {
            return https.get('QuanLyPhim/LayDanhSachPhim', { 
                //https.get để gửi yêu cầu HTTP GET đến API QuanLyPhim/LayDanhSachPhim để lấy danh sách phim.
                params: {
                    maNhom: groupID,
                }
            })
        }
        return https.get('QuanLyPhim/LayDanhSachPhim', {
            params: {
                maNhom: groupID,
                tenPhim: name
            }
            //name là một chuỗi rỗng hoặc chỉ chứa các khoảng trắng, thì chỉ truyền maNhom vào yêu cầu thông qua đối tượng params. Nếu không, nó cũng truyền tenPhim vào yêu cầu thông qua đối tượng params.
        })
    },
    uploadImageAdmin: (formData) => https.post('QuanLyPhim/ThemPhimUploadHinh', formData),

    getMovieDetailAdmin: (maPhim) => https.get('QuanLyPhim/LayThongTinPhim', {
        params: {
            maPhim
        }
    }),
    updateFilms: (formData) => https.post('QuanLyPhim/CapNhatPhimUpload', formData),
    deleteFilm: (id) => https.delete('QuanLyPhim/XoaPhim', {
        params: {
            maPhim: id
        }
    }),
    getInfoTheaterAdmin: () => https.get('QuanLyRap/LayThongTinHeThongRap'),
    getInfoCinemaCluster: (maHeThongRap) => https.get('QuanLyRap/LayThongTinCumRapTheoHeThong', {
        params: {
            maHeThongRap
        }
    }),
    postShowTimes: (lich) => {
        const url = 'QuanLyDatVe/TaoLichChieu';
        console.log('lich',lich)
        return https.post(url, lich,
            {
                headers: {
                    TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y',
                    Authorization: "Bearer " + localStorage.getItem('userToken')
                },
                
            })
    },
    postUser: (data)=>https.post("/QuanLyNguoiDung/ThemNguoiDung",data),
    getListUer: (GP)=>https.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GP}`),
    deleteUer:(id)=>https.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`),
    searchUser:(id,GP)=> https.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GP}&tuKhoa=${id}`),
    postUpLoadUser:(data)=>https.post('/QuanLyNguoiDung/CapNhatThongTinNguoiDung',data)

}