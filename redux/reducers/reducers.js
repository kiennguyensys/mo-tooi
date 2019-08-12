import {LOADING, GET_PEOPLE, GET_PERSON, CHOOSE_PERSON, SET_ALL_PAGE} from '../actions/actions.js';
import { combineReducers } from 'redux';

const getPeople = (state = [], action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return action.payload
  }
  return state;
}

const loading = (state = true, action) => {
  switch (action.type) {
    case LOADING:
      return action.payload
  }
  return state;
}

const getPerson = (state = {}, action) => {
    switch (action.type) {
        case GET_PERSON:
            return action.payload
        case CHOOSE_PERSON:
            return action.payload
    }
    return state;

}

const domain = (state = 'localhost:3000/api/', {}) => {
    return state
}

const allPage = (state = 1, action) => {
    switch (action.type) {
        case SET_ALL_PAGE:
            return action.payload
    }
    return state;
}


const reducers = combineReducers({
    allPage: allPage,
    domain: domain,
    person: getPerson,
    people: getPeople,
    loading: loading,
});

export default reducers;
