import { FATCH_USERS_SUCCESS_TopRated, FATCH_USERS_FAILURE_TopRated, FATCH_USERS_REQUEST_TopRated } from "./TopRatedType"
import axios from "axios"

export const fetchUsersRequest = () => {
    return {
        type: FATCH_USERS_REQUEST_TopRated
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FATCH_USERS_SUCCESS_TopRated,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FATCH_USERS_FAILURE_TopRated,
        payload: error
    }
}


export const fetchUsersTwo = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=10&page=1&include_adult=false')
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