/*
 @flow
 */
import React, {PropTypes, Text, View, TouchableHighlight} from 'react-native';
import {Types, Styles, Colors} from './../utils';

const PostListItem = (props:Object) => {
    const post:Types.Post = props.post;
    return (
        <View style={Styles.postListItem}>
            <TouchableHighlight underlayColor={Colors.highlight}>
                <View>
                    <View>
                        <Text style={Styles.text} numberOfLines={2}>
                            {post.title}
                        </Text>
                        <Text style={Styles.text} numberOfLines={1}>
                            {post.by}
                        </Text>
                        <Text style={Styles.text}>
                            Comments {post.descendants}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
};

PostListItem.propTypes = {post: PropTypes.object.isRequired};

export default PostListItem;
