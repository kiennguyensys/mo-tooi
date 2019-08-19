// Exporting our action types
import {apiPostsUrl} from './constants.js';
import axios from 'axios'
export const GET_POEM = 'GET_POEM';

// This will get the recipes from the API
export function updatePoems(data) {
    return {
      type: GET_POEM,
      payload: data
    };
}

// This is a redux thunk that will fetch our model data
export const fetchPoemsData = () => {
    console.log("action")
    return (dispatch) => {
        const request = axios.get(apiPostsUrl + '?page=1');
        request.then((response) => {
            console.log(response)
            dispatch(updatePoems(response.data));
        });
    }
}
