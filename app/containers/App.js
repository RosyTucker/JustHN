/* @flow */
import React from 'react-native';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers';
import JustForHackerNews from './JustForHackerNews';

const store = applyMiddleware(thunkMiddleware)(createStore)(reducers, {});

const App = () => <Provider store={store}><JustForHackerNews/></Provider>;

export default App;

