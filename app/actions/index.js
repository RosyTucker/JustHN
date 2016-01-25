import HackerNewsApiClient from '../middleware/HackerNewsApiClient';
import Firebase from 'firebase';

const apiClient:HackerNewsApiClient = new HackerNewsApiClient(new Firebase('https://hacker-news.firebaseio.com/v0'));

const RECEIVE_POSTS = 'RECEIVE_POSTS';

const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    };
};

const fetchPosts = () => {
    return dispatch => {
        return apiClient.getResults().then(posts => {
            dispatch(receivePosts(posts));
        });
    };
};

export {
    fetchPosts,
    receivePosts,
    RECEIVE_POSTS
};
