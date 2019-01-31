/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { AsyncStorage } from 'react-native';

import Types from '../types';

const url = 'http://empresas.ioasys.com.br/api/v1';

const requestGetAll = () => ({ type: Types.ENTERPRISE.REQUEST_GET_ALL });
const successGetAll = data => ({ type: Types.ENTERPRISE.SUCCESS_GET_ALL, data });
const failureGetAll = error => ({ type: Types.ENTERPRISE.FAILURE_GET_ALL, error });

export const getAllEnterpresises = () => async (dispatch) => {
  try {
    dispatch(requestGetAll());
    const accessToken = await AsyncStorage.getItem('accessToken');
    const client = await AsyncStorage.getItem('client');
    const uid = await AsyncStorage.getItem('uid');

    const result = await axios.get(`${url}/enterprises/`, {
      headers: {
        'Content-Type': 'application/json',
        'access-token': accessToken,
        client,
        uid,
      },
    });

    if (result.error) {
      dispatch(failureGetAll(result.error));
    } else {
      dispatch(successGetAll(result.data));
    }
  } catch (error) {
    dispatch(failureGetAll(error));
  }
};
