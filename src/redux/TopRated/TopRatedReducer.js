import { FATCH_USERS_FAILURE_TopRated, FATCH_USERS_REQUEST_TopRated, FATCH_USERS_SUCCESS_TopRated } from "./TopRatedType"

const initialState = {
    loading: false,
    users: [],
    error: ''
}


const TopRatedReducer = (state = initialState, action) => {
    switch (action.type) {
        case FATCH_USERS_REQUEST_TopRated: return {
            ...state, loading: true
        }

        case FATCH_USERS_SUCCESS_TopRated: return {
            loading: false,
            users: action.payload,
            error: ''
        }

        case FATCH_USERS_FAILURE_TopRated: return {
            loading: false,
            users: [],
            error: action.payload
        }
        default: return state
    }
}

export default TopRatedReducer