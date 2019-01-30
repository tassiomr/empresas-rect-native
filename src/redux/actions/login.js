import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FAILURE_LOGIN = 'FAILURE_LOGIN';

const requestLogin = () => ({ type: REQUEST_LOGIN });
const successLogin = (data, user) => ({ 
    type: SUCCESS_LOGIN, 
    data, 
    user 
});
const failureLogin = error => ({ 
    type: FAILURE_LOGIN, 
    error 
});

export const REQUEST_SET_CREDENTIALS = 'REQUEST_SET_CREDENTIALS';
export const SUCCESS_SET_CREDENTIALS = 'SUCCESS_SET_CREDENTIALS';
export const FAILURE_SET_CREDENTIALS = 'FAILURE_SET_CREDENTIALS';

const requestSetCredentials = () => ({ type: REQUEST_SET_CREDENTIALS });
const successSetCredentials = data => ({ 
    type: SUCCESS_SET_CREDENTIALS, 
    data 
});
const failureSetCredentials = error => ({ 
    type: FAILURE_SET_CREDENTIALS, error 
});

const url = `http://empresas.ioasys.com.br/api/v1/users/auth/sign_in`;

export const tryLogin = (email, password) => dispatch => {
    dispatch(requestLogin());

    try {
        
        axios.post(
            url, 
            { email, password }, 
            { headers: { 'Content-Type': 'application/json'}})
            .then(e => dispatch(successLogin(e.headers, e.data)))
            .catch(e => alert(e))

    } catch(error) {
        dispatch(failureLogin(error));
    }
}

export const setCredentials = (data, user) => dispatch => {
    try {
        dispatch(requestSetCredentials());
        AsyncStorage.setItem('accessToken', data['access-token'])
        AsyncStorage.setItem('uid', data.uid)
        AsyncStorage.setItem('client', data.cliet)
        AsyncStorage.setItem('user', JSON.stringify(user))
        dispatch(successSetCredentials());
    } catch(error) {
        dispatch(failureSetCredentials(error));
    }
}

