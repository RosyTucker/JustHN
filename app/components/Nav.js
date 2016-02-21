/* @flow */
import React from 'react-native';
import {Styles} from '../utils';

const {Navigator, Text, PropTypes, TouchableOpacity, Image} = React;

var NavigationBarRouteMapper = {
    Title: (route) => <Text style={Styles.navTitle}>{route.title}</Text>,
    LeftButton(route, navigator, index, navState) {
        return index === 0 ? null : (
            <TouchableOpacity
                style={Styles.navButton}
                onPress={() => navigator.pop()}>
                <Image style={Styles.navButtonIcon}
                    source={require('image!back')}
                />
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, navState) {
    }
};

const renderScene = (route, navigator) => <route.component {...route.props} navigator={navigator}/>;

const Nav = (props:Object) => (
    <Navigator initialRoute={props.initialRoute}
               renderScene={renderScene}
               navigationBar={<Navigator.NavigationBar style={Styles.navBar} routeMapper={NavigationBarRouteMapper}/>}/>
);

Nav.propTypes = {
    initialRoute: PropTypes.object.isRequired
};

export default Nav;
