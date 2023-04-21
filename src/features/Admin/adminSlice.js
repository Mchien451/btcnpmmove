import { produce } from 'immer'
import * as actionTypes from './constants'

const initialState = {
    moviesList: [],
    movieDetail: null,
    ListUser:[],
    infoUser2:null
}

export const adminReducer = (state = initialState, { type, payload }) => {
    return produce(state, draft => {
        if (type === actionTypes.FETCH_MOVIES_ADMIN) {
            draft.moviesList = payload
        }
        if (type === actionTypes.GET_MOVIE_DETAIL) {
            draft.movieDetail = payload
        }
        if (type === actionTypes.GET_LIST_USER) {
            draft.ListUser = payload
        }
        if (type === actionTypes.GET_INFO_USER) {
            draft.infoUser2 = payload
        }
    })
}
//hư viện immer để viết immutable code. Khi nhận được một action, nó sẽ tạo một bản sao của state hiện tại và trả về một phiên bản mới của state đó. Nếu action không khớp với bất kỳ case nào, state sẽ không bị thay đổi.