import React from 'react-native';
const {StyleSheet} = React;

const NAV_HEIGHT = 60;
const FONT_FAMILY = 'HelveticaNeue';
const FONT_SIZE_TITLE = 17;

export const Colors = {
    main: '#ff6600',
    lightText: '#ffffff',
    darkText: '#101011',
    lightGrey: '#eeeeee',
    highlight: '#eeeeee'
};

export const Styles = StyleSheet.create({
    postList: {
        marginTop: NAV_HEIGHT
    },
    postListItem: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5
    },
    text: {
        color: Colors.darkText
    },
    navTitle: {
        fontFamily: FONT_FAMILY,
        fontSize: FONT_SIZE_TITLE,
        fontWeight: 'bold',
        color: Colors.lightText,
        marginTop: 8
    },
    navBar: {
        flex: 1,
        backgroundColor: Colors.main
    }
});
