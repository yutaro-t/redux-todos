import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { reducer } from './reducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
