/*
 * @flow
 */
import React, {PropTypes, ListView} from 'react-native';
import PostListItem from './PostListItem';
import {Types, Styles} from './../utils';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const PostList = (props:Object) =>  <ListView style={Styles.postList}
                                              dataSource={dataSource.cloneWithRows(props.posts)}
                                              renderRow={renderRow}/>;

const renderRow = (post:Types.Post) => <PostListItem post={post} key={post.id}/>;

PostList.propTypes = {posts: PropTypes.array.isRequired};

export default PostList;
