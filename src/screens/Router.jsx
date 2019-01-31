import React from 'react';
import { Provider } from 'react-redux';
import Login from './Login';

import store from '../redux/store';

const StartApp = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

export default StartApp;
