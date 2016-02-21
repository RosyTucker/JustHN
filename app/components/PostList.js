/* @flow */
import React, {PropTypes, ListView} from 'react-native';
import PostListItem from './PostListItem';
import PostDetail from './PostDetail';
import {Types, Styles} from './../utils';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const PostList = React.createClass({
    propTypes: {
        getPosts: PropTypes.func.isRequired,
        navigator: PropTypes.object.isRequired
    },
    render() {
        return (
            <ListView style={Styles.page} dataSource={dataSource.cloneWithRows(this.props.getPosts())}
                      renderRow={this._renderRow}/>
        );
    },
    _renderRow(post:Types.Post) {
        return <PostListItem post={post} key={post.id} onSelect={() => this._onPostSelected(post)}/>;
    },
    _onPostSelected(post:Types.Post) {
        this.props.navigator.push({
            component: PostDetail,
            props: {post}
        });
    }
});

export default PostList;
