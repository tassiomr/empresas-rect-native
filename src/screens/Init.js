import React from 'react';
import { Provider } from 'react-redux';
import Login from './Login';

import store from '../redux/store';

class Router extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

export default Router;
