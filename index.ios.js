/*
 * @flow
 */
import React from 'react-native';
import {Styles, Colors} from './Styles';
import Strings from './Strings';

const { AppRegistry, NavigatorIOS, Component, Text} = React;

class List extends Component {
    render() {
        return <Text>Hello</Text>
    }
}

class JustForHackerNews extends Component {
    render() {
        const initialRoute = {title: Strings.appName, component: List};
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
