import axios from 'axios';
import { AsyncStorage } from 'react-native';

const url = `http://empresas.ioasys.com.br/api/v1`;


const getAllEnterpresises = () => dispatch => {
    try{
        const accessToken = AsyncStorage.getItem('access-token');
        const client = AsyncStorage.getItem('client');
        const uid = AsyncStorage.getItem('uid');
    }
    catch(error) {}
}