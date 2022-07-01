import { FATCH_USERS_SUCCESS_DETAILS, FATCH_USERS_FAILURE_DETAILS, FATCH_USERS_REQUEST_DETAILS } from "./MovieDetailsType"
import axios from "axios"

export const fetchUsersRequest = () => {
    return {
        type: FATCH_USERS_REQUEST_DETAILS
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FATCH_USERS_SUCCESS_DETAILS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FATCH_USERS_FAILURE_DETAILS,
        payload: error
    }
}


export const fetchUsersThree = (id) => {

    //    const {id} = useParams()

    

    return (dispatch) => {
        dispatch(fetchUsersRequest)
        const api_key = '5d98a7a1405b8032e28c31e19e4d10a9'
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
            .then(res => {
                const users = res.data
                
                dispatch(fetchUserSuccess(users))
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(fetchUsersFailure(errMsg))
            })
    }
}