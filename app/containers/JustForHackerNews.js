/* @flow */
import React from 'react-native';
import {connect} from 'react-redux';
import {Strings} from '../utils';
import PostList from '../components/PostList';
import Nav from '../components/Nav';
import {fetchPosts} from '../actions';

const {PropTypes} = React;

const JustForHackerNews = React.createClass({
    propTypes: {
        posts: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    },
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchPosts());
    },
    render() {
        const initialRoute = {component: PostList, title: Strings.appName, props: {getPosts: () => this.props.posts}};
        return <Nav initialRoute={initialRoute}/>;
    }
});

const mapStateToProps = (state) => {
    return {posts: state.receivePosts.posts};
};

export default connect(mapStateToProps)(JustForHackerNews);
