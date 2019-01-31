import Types from '../types';

const initialState = {
  error: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ENTERPRISE.SUCCESS_GET_ALL:
      return {
        ...state, data: action.data, loading: false, type: action.type,
      };
    case Types.ENTERPRISE.REQUEST_GET_ALL:
      return {
        ...state, loading: true, type: action.type, error: null,
      };
    case Types.ENTERPRISE.FAILURE_GET_ALL:
      return {
        ...state, loading: false, error: action.error, type: action.type,
      };
    default:
      return state;
  }
};
