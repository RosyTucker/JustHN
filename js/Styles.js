import React from 'react-native';
const {StyleSheet} = React;

export const Colors = {
    main: '#ff6600',
    lightText: '#ffffff',
    lightGrey: '#eeeeee'
};

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textContainer: {
        flex: 1
    },
    text: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 15
    },
    textSmall: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 10
    },
    centerText: {
        alignItems: 'center'
    },
    row: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 5,
        minHeight: 100
    },
    thumbnail: {
        width: 75,
        height: 75,
        margin: 5
    },
    rowSeparator: {
        backgroundColor: Colors.lightGrey,
        height: 1,
        marginHorizontal: 4
    }
});
