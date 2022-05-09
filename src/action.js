import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    FETCH_MORE_ROBOTS_PENDING,
    FETCH_MORE_ROBOTS_SUCCESS,
    FETCH_MORE_ROBOTS_FAILED,
} from './constant';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestRobots = () => (dispatch) => {

    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data
    })).catch(error => dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: error
    }))
}


export const requestMoreRobots = () => (dispatch) => {
    dispatch({ type: FETCH_MORE_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => dispatch({
        type: FETCH_MORE_ROBOTS_SUCCESS,
        payload: data
    })).catch(error => dispatch({
        type: FETCH_MORE_ROBOTS_FAILED,
        payload: error
    }))
}