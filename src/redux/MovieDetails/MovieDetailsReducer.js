import { FATCH_USERS_FAILURE_DETAILS, FATCH_USERS_REQUEST_DETAILS, FATCH_USERS_SUCCESS_DETAILS } from "./MovieDetailsType"

const initialState = {
    loading: false,
    users: [],
    error: ''
}


const MovieDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FATCH_USERS_REQUEST_DETAILS: return {
            ...state, loading: true
        }

        case FATCH_USERS_SUCCESS_DETAILS: return {
            loading: false,
            users: action.payload,
            error: ''
        }

        case FATCH_USERS_FAILURE_DETAILS: return {
            loading: false,
            users: [],
            error: action.payload
        }
        default: return state
    }
}

export default MovieDetailsReducer