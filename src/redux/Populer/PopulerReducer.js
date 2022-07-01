import { FATCH_USERS_FAILURE_POPULER, FATCH_USERS_REQUEST_POPULER, FATCH_USERS_SUCCESS_POPULER } from "./PopulerType"

const initialState = {
    loading: false,
    users: [],
    error: ''
}


const PopulerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FATCH_USERS_REQUEST_POPULER: return {
            ...state, loading: true
        }

        case FATCH_USERS_SUCCESS_POPULER: return {
            loading: false,
            users: action.payload,
            error: ''
        }

        case FATCH_USERS_FAILURE_POPULER: return {
            loading: false,
            users: [],
            error: action.payload
        }
        default: return state
    }
}

export default PopulerReducer