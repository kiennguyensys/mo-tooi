import {GET_POEM} from './Poems/actions.js';
import { combineReducers } from 'redux';

const getPoem = (state = [], action) => {
    switch (action.type) {
      case GET_POEM:
        return action.payload
    }
    return state;
}

const reducers = combineReducers({
    poem: getPoem,
});

export default reducers;
