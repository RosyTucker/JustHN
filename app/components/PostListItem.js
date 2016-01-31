/* @flow */
import React, {PropTypes, Text, View, TouchableHighlight} from 'react-native';
import {Types, Styles, Colors} from './../utils';

const PostListItem = (props:Object) => {
    return (
        <View style={Styles.postListItem}>
            <TouchableHighlight onPress={props.onSelect} underlayColor={Colors.highlight}>
                <View>
                    <View>
                        <Text style={Styles.text} numberOfLines={2}>
                            {props.post.title}
                        </Text>
                        <Text style={Styles.text} numberOfLines={1}>
                            {props.post.by}
                        </Text>
                        <Text style={Styles.text}>
                            Comments {props.post.descendants}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
};

PostListItem.propTypes = {post: PropTypes.object.isRequired, onSelect: PropTypes.func.isRequired};

export default PostListItem;
