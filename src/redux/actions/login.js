/* eslint-disable import/prefer-default-export */
import { AsyncStorage } from 'react-native';
import axios from 'axios';

import Types from '../types';
import { genericError } from '../../utils/strings';

const url = 'http://empresas.ioasys.com.br/api/v1/users/auth/sign_in';

const requestLogin = () => ({ type: Types.LOGIN.REQUEST_LOGIN });
const successLogin = (data, user) => ({
  type: Types.LOGIN.SUCCESS_LOGIN,
  data,
  user,
});
const failureLogin = error => ({
  type: Types.LOGIN.FAILURE_LOGIN,
  error,
});

const requestLogout = () => ({ type: Types.LOGIN.REQUEST_LOGOUT });
const successLogout = (data, user) => ({
  type: Types.LOGIN.SUCCESS_LOGOUT,
  data,
  user,
});
const failureLogout = error => ({
  type: Types.LOGIN.FAILURE_LOGOUT,
  error,
});

const requestSetCredentials = () => ({ type: Types.LOGIN.REQUEST_SET_CREDENTIALS });
const successSetCredentials = data => ({
  type: Types.LOGIN.SUCCESS_SET_CREDENTIALS,
  data,
});
const failureSetCredentials = error => ({
  type: Types.LOGIN.FAILURE_SET_CREDENTIALS, error,
});


export const tryLogin = (email, password) => async (dispatch) => {
  dispatch(requestLogin());
  try {
    const result = await axios.post(
      url,
      { email, password },
      { headers: { 'Content-Type': 'application/json' } },
    );

    dispatch(successLogin(result.headers, result.data));
    
  } catch (error) {
    if (error.status === 401) {
      dispatch(failureLogin('Usuário ou senha incorretos'));
    } else {
      dispatch(failureLogin(genericError));
    }
  }
};

export const setCredentials = (data, user) => (dispatch) => {
  try {
    dispatch(requestSetCredentials());
    AsyncStorage.setItem('accessToken', data['access-token']);
    AsyncStorage.setItem('uid', data.uid);
    AsyncStorage.setItem('client', data.client);
    AsyncStorage.setItem('user', JSON.stringify(user));
    dispatch(successSetCredentials());
  } catch (error) {
    dispatch(failureSetCredentials(genericError));
  }
};


export const logout = () => (dispatch) => {
  try {
    dispatch(requestLogout());
    AsyncStorage.removeItem('accessToken');
    AsyncStorage.removeItem('uid');
    AsyncStorage.removeItem('client');
    AsyncStorage.removeItem('user');
    dispatch(successLogout());
  } catch (error) {
    dispatch(failureLogout(genericError));
  }
};
