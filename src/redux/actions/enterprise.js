import axios from 'axios';
import { AsyncStorage } from 'react-native';

const url = `http://empresas.ioasys.com.br/api/v1`;


export const REQUEST_GET_ALL = 'REQUEST_GET_ALL';
export const SUCCESS_GET_ALL = 'SUCCESS_GET_ALL';
export const FAILURE_GET_ALL = 'FAILURE_GET_ALL';

const requestGetAll = () => ({ type: REQUEST_GET_ALL });
const successGetAll = data => ({ type: SUCCESS_GET_ALL, data })
const failureGetAll = error => ({ type: FAILURE_GET_ALL, error })

export const getAllEnterpresises = () => async dispatch => {
    try{
        dispatch(requestGetAll())
        const accessToken = await AsyncStorage.getItem('accessToken');
        const client = await AsyncStorage.getItem('client');
        const uid = await AsyncStorage.getItem('uid');

        const result = await axios.get(`${url}/enterprises/`, {
            headers: {
                'Content-Type': 'application/json',
                'access-token': accessToken,
                client,
                uid
            }
        })

        if(result.error) {
            dispatch(failureGetAll(result.error))
        } else {
            dispatch(successGetAll(result.data));
        }
        
        
    }
    catch(error) {}
}