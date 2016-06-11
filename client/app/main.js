import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

window.onload = () => {
  const store = configureStore();
  const rootElement = document.getElementById('root');

  ReactDOM.render(
  <Provider store={store}>
      <AppContainer />
      </Provider>,
      rootElement
  );
};
