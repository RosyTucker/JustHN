import React from 'react-native';
import {connect} from 'react-redux';
import {Strings, Types, Styles} from '../utils';
import PostList from '../components/PostList';
import {fetchPosts} from '../actions';

const {Navigator, Text, PropTypes} = React;

var NavigationBarRouteMapper = {
    Title: (route) => <Text style={Styles.navTitle}>{route.title}</Text>,
    LeftButton(route, navigator, index, navState) {},
    RightButton(route, navigator, index, navState) {}
};

class JustForHackerNews extends React.Component {
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchPosts());
    }

    render() {
        return (
            <Navigator initialRoute={{component: PostList, title: Strings.appName}}
                       renderScene={this._renderScene.bind(this)}
                       navigationBar={ <Navigator.NavigationBar style={Styles.navBar} routeMapper={NavigationBarRouteMapper}/>}/>
        );
    }

    _renderScene(route, navigator) {
        const Component = route.component;
        const posts: Array<Types.Post> = this.props.posts;
        return (
            <Component {...route.props} navigator={navigator} route={route} posts={posts}/>
        );
    }
}

JustForHackerNews.propTypes = {
    posts: PropTypes.array.isRequired,
    dispatch: PropTypes.function.isRequired
};

const mapStateToProps = (state) => {
    return {posts: state.receivePosts.posts};
};

export default connect(mapStateToProps)(JustForHackerNews);
