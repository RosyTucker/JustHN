/* @flow */
import React, {PropTypes, Text, View} from 'react-native';
import {Types, Styles} from './../utils';

const PostDetail = (props:Object) => {
    return <View style={Styles.page}><Text>{JSON.stringify(props.post)}</Text></View>;
};

PostDetail.propTypes = {post: PropTypes.object.isRequired};

export default PostDetail;
