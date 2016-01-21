/*
 * @flow
 */
type Item =  {by: String, descendants: Number, id: Number, kids: Array<Number>, score: Number, time: Number, title: String, type: String, url: String};

import React from 'react-native';
import {Styles} from './Styles';
import HackerNewsApiClient from './HackerNewsApiClient';

const {Text, ListView, View, TouchableHighlight} = React;
const dataSource:ListView.DataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const apiClient:HackerNewsApiClient = new HackerNewsApiClient();

class ListItem extends React.Component {
    render() {
        return (
            <View>
                <TouchableHighlight>
                    <View style={Styles.row}>
                        <View style={Styles.textContainer}>
                            <Text numberOfLines={2}>
                                {this.props.data.title}
                            </Text>
                            <Text numberOfLines={1}>
                                {this.props.data.by}
                            </Text>
                            <Text>
                                Comments {this.props.data.descendants}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

class PostList extends React.Component {

    constructor() {
        super();
        this.state = {dataSource: dataSource.cloneWithRows([])};
    }

    componentWillMount() {
        apiClient.getPage().then((items:Array<Item>) => {
            this.setState({dataSource: dataSource.cloneWithRows(items)});
        });
    }

    render() {
        return <ListView dataSource={this.state.dataSource} renderRow={this.renderRow}/>;
    }

    renderRow(item:Item) {
        return <ListItem data={item}/>;
    }
}

export default PostList;
