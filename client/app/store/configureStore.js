import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import issueReducer from '../reducers/issueReducer';

export default function configureStore(initialState) {
  const store = createStore(issueReducer, initialState, applyMiddleware(thunk));
  if (module.hot) {
    module.hot.accept('../reducers/issueReducer', () => {
      const nextRootReducer = require('../reducers/issueReducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
