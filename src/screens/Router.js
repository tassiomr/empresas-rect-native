import React from 'react';
import { Provider } from 'react-redux';
import Home from './Home';

import store from '../redux/store';

const Router = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);


export default Router;
