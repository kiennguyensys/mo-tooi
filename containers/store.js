import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers.js';

// in this file we are initializing the redux store by passing initial state and instance of reducer, we are applying thunk middleware to support async data flow.
const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = (initialState = {}) => {
  return createStore(
      reducer,
      initialState,
      composeEnhancers(
          applyMiddleware(thunk)
      )
  );
};
