import { combineReducers } from 'redux';
import login from './login';
import enterprise from './enterprise';

export default combineReducers({
  login,
  enterprise,
});
