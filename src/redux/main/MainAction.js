import { FATCH_USERS_SUCCESS, FATCH_USERS_FAILURE, FATCH_USERS_REQUEST } from "./MainType"
import axios from "axios"

export const fetchUsersRequest = () => {
    return {
        type: FATCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FATCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FATCH_USERS_FAILURE,
        payload: error
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=2&page=1&include_adult=false')
            .then(res => {
                const users = res.data.results
                dispatch(fetchUserSuccess(users))
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(fetchUsersFailure(errMsg))
            })
    }
}