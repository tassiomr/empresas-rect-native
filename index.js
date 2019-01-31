import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import App from './src/screens/Home';
import {name as appName} from './app.json';
import store from './src/redux/store';

const StartApp = () => ( 
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => StartApp);
