import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './Home';
import Login from './Login';

import store from '../redux/store';

const AppNavigator = createStackNavigator(
  {
    Login,
    Home,
  },
  {
    initialRouteName: 'Login',
  },
);

const Navigator = createAppContainer(AppNavigator);

const Router = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);


export default Router;
