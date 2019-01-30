import axios from 'axios';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FAILURE_LOGIN = 'FAILURE_LOGIN';


const requestLogin = () => ({ type: REQUEST_LOGIN });
const successLogin = () => ({ type: SUCCESS_LOGIN });
const failureLogin = error => ({ type: FAILURE_LOGIN, error })

export const tryLogin = (username, password) => dispatch => {
    try {
        dispatch(requestLogin());
        axios.post();
        dispatch(successLogin())
    } catch(error) {
        dispatch(failureLogin(error));
    }
}

