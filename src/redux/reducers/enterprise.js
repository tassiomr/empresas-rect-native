import { SUCCESS_GET_ALL, REQUEST_GET_ALL, FAILURE_GET_ALL } from "../actions/enterprise";

const initialState = {
    type: 'ENTERPRISE'
};


export default (state = initialState, action) => {
    switch(action.type){
        case SUCCESS_GET_ALL:
            return { ...state, data: action.data, loading: false, type: action.type }
        case REQUEST_GET_ALL:
            return { ...state, loading: true, type: action.type }
        case FAILURE_GET_ALL:
            return { ...state, loading: false, error: action.error, type: action.type }
        default:
            return state;
    }
}