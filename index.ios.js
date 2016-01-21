/*
 * @flow
 */
import React from 'react-native';
import {Styles, Colors} from './js/Styles';
import Strings from './js/Strings';
import PostList from './js/PostList';

const {AppRegistry, NavigatorIOS, Component} = React;

class JustForHackerNews extends Component {
    render() {
        const initialRoute = {title: Strings.appName, component: PostList};
        return (
            <NavigatorIOS barTintColor={Colors.main}
                          titleTextColor={Colors.lightText}
                          tintColor={Colors.lightText}
                          style={Styles.container}
                          initialRoute={initialRoute}/>
        );
    }
}

AppRegistry.registerComponent('JustForHackerNews', () => JustForHackerNews);
