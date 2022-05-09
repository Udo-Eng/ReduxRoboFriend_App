
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    FETCH_MORE_ROBOTS_PENDING,
    FETCH_MORE_ROBOTS_SUCCESS,
    FETCH_MORE_ROBOTS_FAILED,
} from './constant';



const initialStateSearch = {
    searchField: ' '
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        // A pure function needs to always return something 
        default:
            return state;
    }
}


const initialStateRequestRobots = {
    isPending: false,
    robots: [],
    error: '',
    isLoading: false,
    isErrorLoading: false
}

export const requestRobots = (state = initialStateRequestRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { isPending: false, robots: action.payload });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload });
        default:
            return state;
    }

}



export const requestMoreRobots = (state = initialStateRequestRobots, action = {}) => {
    switch (action.type) {
        case FETCH_MORE_ROBOTS_PENDING:
            return Object.assign({}, state, { isLoading: true });
        case FETCH_MORE_ROBOTS_SUCCESS:
            return Object.assign({}, state, { isLoading: false, robots: state.robots.concat(action.payload), isErrorLoading: false });
        case FETCH_MORE_ROBOTS_FAILED:
            return Object.assign({}, state, { iisErrorLoading: true, error: action.payload });
        default:
            return state;
    }

}

