import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
//import './index.css';
import store from './js/store/index.js'
//import { Router, browserHistory } from 'react-router';
import Root from './js/containers/Root.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CookiesProvider} from 'react-cookie';


ReactDOM.render(
        <Provider store={store}>
            <Root />
        </Provider>,
    document.getElementById('root')
);