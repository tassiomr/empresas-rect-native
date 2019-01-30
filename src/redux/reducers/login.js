import { FAILURE_LOGIN, SUCCESS_LOGIN, REQUEST_LOGIN, REQUEST_SET_CREDENTIALS, SUCCESS_SET_CREDENTIALS, FAILURE_SET_CREDENTIALS } from "../actions/login";

const initalState = {
    loading: false
}


export default (state = initalState, action) => {

    switch(action.type) {
        case REQUEST_LOGIN:
            return { ...state, loading: true, type: action.type }
        case FAILURE_LOGIN:
            return { ...state, loading: false, type: action.type, error: action.error }
        case SUCCESS_LOGIN:
            return { ...state, loading: false, type: action.type, data: action.data, user: action.user }
        case REQUEST_SET_CREDENTIALS:
            return { ...state, loading: true, type: action.type, }
        case SUCCESS_SET_CREDENTIALS:
            return { ...state, loading: false, type: action.type, }
        case FAILURE_SET_CREDENTIALS: 
            return { ...state, loading: false, type: action.type, error: action.error }
        default:
            return state;
    }
}
