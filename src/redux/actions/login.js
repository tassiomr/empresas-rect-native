import axios from 'axios';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FAILURE_LOGIN = 'FAILURE_LOGIN';


const requestLogin = () => ({ type: REQUEST_LOGIN });
const successLogin = data => ({ type: SUCCESS_LOGIN, data });
const failureLogin = error => ({ type: FAILURE_LOGIN, error })

const url = `http://empresas.ioasys.com.br/api/v1/users/auth/sign_in`

export const tryLogin = (email, password) => dispatch => {
    try {
        dispatch(requestLogin());

        axios.post(
            url, 
            { email, password }, 
            { headers: { 'Content-Type': 'application/json'}}
        ).then(e => dispatch(successLogin(e.headers)))
            .catch(e => alert(e))
        dispatch(successLogin())
    } catch(error) {
        dispatch(failureLogin(error));
    }
}

