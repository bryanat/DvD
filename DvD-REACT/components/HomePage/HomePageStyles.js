import { StyleSheet, Dimensions, Text } from 'react-native';
import React from 'react';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'column',
        width: windowWidth,
    },

    mediumContainer: {
        flex: 1,
        flexDirection: 'column',
        width: windowWidth,
        
    },
    card: {
        borderRadius: 8,
        padding: 10
    },
    calroies: {
        flexDirection: 'row',
        justifyContent:'space-around',
        paddingBottom: 10
    },
    barContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    smallBarContainer: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent:'center'
    },
    smallBarContainer1: {
        backgroundColor: '#457B9D',
        flexDirection: 'column',
        justifyContent:'center',
        width: 100,
        borderRadius: 20,
        alignItems: 'center'
    },
    smallBarContainer2: {
        backgroundColor: '#457B9D',
        flexDirection: 'column',
        justifyContent:'center',
        width: 100,
        borderRadius: 20,
        alignItems: 'center'
    },    
    smallBarContainer3: {
        backgroundColor: '#457B9D',
        flexDirection: 'column',
        justifyContent:'center',
        width: 100,
        borderRadius: 20,
        alignItems: 'center'
    }, 
    titleContainer: {
        textAlign: 'center'
    },
    titleSize: {
        fontWeight: 'bold'
    },


    // TEXT

    headerText: {
        fontSize: 35
    },
    boxText: {
        fontSize: 21,
    }
})