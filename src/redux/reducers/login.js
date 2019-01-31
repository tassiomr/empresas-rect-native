import Types from '../types';

const initalState = {
  loading: false,
  error: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case Types.LOGIN.REQUEST_LOGIN:
      return {
        ...state, loading: true, type: action.type, error: null,
      };
    case Types.LOGIN.FAILURE_LOGIN:
      return {
        ...state, loading: false, type: action.type, error: action.error,
      };
    case Types.LOGIN.SUCCESS_LOGIN:
      return {
        ...state, loading: false, type: action.type, data: action.data, user: action.user,
      };
    case Types.LOGIN.REQUEST_SET_CREDENTIALS:
      return { ...state, loading: true, type: action.type };
    case Types.LOGIN.SUCCESS_SET_CREDENTIALS:
      return { ...state, loading: false, type: action.type };
    case Types.LOGIN.FAILURE_SET_CREDENTIALS:
      return {
        ...state, loading: false, type: action.type, error: action.error,
      };
    default:
      return state;
  }
};
