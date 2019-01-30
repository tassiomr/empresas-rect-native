import { FAILURE_LOGIN, SUCCESS_LOGIN, REQUEST_LOGIN } from "../actions/login";

const initalState = {
    loading: false
}


const Login = (state = initalState, action) => {
    switch(action) {
        case FAILURE_LOGIN:
            return { loading: false, error: action.error, ...state }
        case SUCCESS_LOGIN:
            return { loading: false, ...state }
        case REQUEST_LOGIN:
            return { loading: true, ...state }
    }
    return state;
}

export default Login;