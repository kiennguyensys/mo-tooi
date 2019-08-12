import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers.js';

// in this file we are initializing the redux store by passing initial state and instance of reducer, we are applying thunk middleware to support async data flow.
<<<<<<< HEAD
=======
const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

>>>>>>> master
export const store = (initialState = {}) => {
  return createStore(
      reducer,
      initialState,
      composeEnhancers(
          applyMiddleware(thunk)
      )
  );
};
