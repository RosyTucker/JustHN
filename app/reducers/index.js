import { combineReducers } from 'redux';
import { RECEIVE_POSTS } from '../actions';

function receivePosts(state = {posts: []}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                posts: action.posts
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    receivePosts
});

export default rootReducer;
