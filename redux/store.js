import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';

// in this file we are initializing the redux store by passing initial state and instance of reducer, we are applying thunk middleware to support async data flow.
export const store = (initialState = {}) => {
  return createStore(
      reducer,
      initialState,
      compose(
          applyMiddleware(thunk),
          window.devToolsExtension ? window.devToolsExtension() : f => f
      )
  );
};
