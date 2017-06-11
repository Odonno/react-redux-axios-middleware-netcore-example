import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware, Store as ReduxStore } from 'redux';
import { Provider } from 'react-redux';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import * as State from './state';
import { reducers, initialState } from './reducers';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const apiClient = axios.create({
  baseURL: 'http://localhost:54313/api',
  responseType: 'json'
});

const store: ReduxStore<State.Root> = createStore(
  reducers,
  initialState,
  applyMiddleware(
    axiosMiddleware(apiClient)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
