/* @flow */
import React, {PropTypes, Text, View} from 'react-native';
import {Types, Styles} from './../utils';

const PostDetail = (props:Object) => {
    const post:Types.Post = props.post;
    return (
        <View style={Styles.page}>
            <Text>{JSON.stringify(post)}</Text>
        </View>
    );
};

PostDetail.propTypes = {post: PropTypes.object.isRequired};

export default PostDetail;
