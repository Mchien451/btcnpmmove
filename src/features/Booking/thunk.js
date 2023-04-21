import { movieService } from './services/movieService';
import * as actionTypes from './constants'

export const fetchBanners = async (dispatch) => {
    try {
        const res = await movieService.getBanners();
        dispatch({
            type: actionTypes.FETCH_BANNERS,
            payload: res.data.content
        })
    } catch (err) {
        console.log(err)
    }
}

export const fetchMovies = (soTrang) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.DISPLAY_LOADING
        })
        const res = await movieService.getMoviesPagination(soTrang);
        dispatch({
            type: actionTypes.FETCH_MOVIES,
            payload: res.data.content
        })
        dispatch({
            type: actionTypes.HIDDEN_LOADDING
        })
    } catch (err) {
        console.log(err)
    }
}

export const fetchInfoTheater = async (dispatch) => {
    try {
        const res = await movieService.getTabs();
        dispatch({
            type: actionTypes.FETCH_INFOR_THEATER,
            payload: res.data.content
        })
    } catch (err) {
        console.log(err)
    }
}

export const fetchScheduleDetail = id => async (dispatch) => {
    try {
        const res = await movieService.getScheduleDetail(id);
        dispatch({
            type: actionTypes.FETCH_LIST_SEAT,
            payload: res.data.content
        })
    } catch (err) {
        console.log(err)
    }
}


export const fetchDetailMovie = id => async (dispatch) => {
    try {
        const res = await movieService.getDetailMovie(id);
        dispatch({
            type: actionTypes.FETCH_DETAIL_MOVIE,
            payload: res.data.content
        })
    } catch (err) {
        console.log(err)
    }
}

export const fetchListSeat = id => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.DISPLAY_LOADING
        })

        const res = await movieService.getListSeats(id);
        dispatch({
            type: actionTypes.FETCH_LIST_SEAT,
            payload: res.data.content
        })
        dispatch({
            type: actionTypes.HIDDEN_LOADDING
        })
    } catch (err) {
        dispatch({
            type: actionTypes.HIDDEN_LOADDING
        })
        console.log(err)
    }
}

export const postBookTicket = info => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.DISPLAY_LOADING
        })
        const res = await movieService.postBookTicket(info);

        if (res.data.statusCode === 200) {
            dispatch({
                type: actionTypes.HIDDEN_LOADDING
            })
            // chuyển sang trang activeTabs khác
            dispatch({
                type: actionTypes.COMPLETE_CHECKOUT
            })
        }

    } catch (err) {
        dispatch({
            type: actionTypes.HIDDEN_LOADDING
        })
        console.log(err)
    }
}

//Thunk là một middleware cho phép bạn viết các hàm action creator trả về một function thay vì một object. Khi dispatch một hàm action creator được kết nối với Thunk middleware, thì function sẽ nhận được các tham số (dispatch, getState), và có thể sử dụng dispatch để dispatch các action mới, hoặc sử dụng getState để truy cập trạng thái hiện tại của store.

// thực hiện các công việc tương tác với API và cập nhật store trong Redux
// thực hiện một công việc cụ thể như fetch dữ liệu từ server, cập nhật thông tin phim, đặt vé xem phim,

//hàm fetchMovies sẽ thực hiện việc lấy danh sách phim dựa trên số trang truyền vào và sau đó dispatch action FETCH_MOVIES để cập nhật danh sách phim lên store.