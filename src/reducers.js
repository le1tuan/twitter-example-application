import {
    combineReducers
} from 'redux';

const initState = {
    isFetching: false,
    searchResult: [],
};
export const favoriteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REQUEST_SEND_MESSAGE':
            return Object.assign({}, state, {
                isFetching: true,
            });
        case 'REQUEST_SEND_MESSAGE_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
            });
        case 'RESQUEST_SEND_MESSAGE_ERROR':
            return Object.assign({}, state, {
                isFetching: false,
            })
        default:
            return state;
    }
}
export const searchingReducer = (state = initState, action) => {
    switch (action.type) {
        case 'REQUEST_SEARCH_USER':
            return Object.assign({}, state, {
                isFetching: true,
            });
        case 'REQUEST_SEARCH_USER_SUCCESS':
            console.log(action);
            return Object.assign({}, state, {
                isFetching: false,
                searchResult: action.result
            });
        case 'REQUEST_SEARCH_USER_ERROR':
            return Object.assign({}, state, {
                isFetching: false,
            })
        default:
            return state;
    }
}
export default combineReducers({
    favoriteReducer,
    searchingReducer
})