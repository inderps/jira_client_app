import { createStore } from 'redux';
import issueReducer from '../reducers/issueReducer';

export default function configureStore(initialState) {
  const store = createStore(issueReducer, initialState);
  if (module.hot) {
    module.hot.accept('../reducers/issueReducer', () => {
      const nextRootReducer = require('../reducers/issueReducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
