import { FATCH_USERS_SUCCESS_POPULER, FATCH_USERS_FAILURE_POPULER, FATCH_USERS_REQUEST_POPULER } from "./PopulerType"
import axios from "axios"

export const fetchUsersRequest = () => {
    return {
        type: FATCH_USERS_REQUEST_POPULER
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FATCH_USERS_SUCCESS_POPULER,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FATCH_USERS_FAILURE_POPULER,
        payload: error
    }
}


export const fetchUsersone = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=3&page=1&include_adult=false')
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