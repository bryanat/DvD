import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Button } from "react-native"

import AppIntroSlider from 'react-native-app-intro-slider'
import CreateUserScreen from '../screens/CreateUserScreen'
import AuthProvider from '../hooks/AuthProvider'


const Onboarding = () => {

    const context = useContext(AuthContext)


    const [showApp, setShowApp] = useState(false);

    const onDone = () => {
        setShowApp(true);
    }

    const onSkip = () => {
        setShowApp(true);
    }

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.introTitle}>{item.title}</Text>
                <Image style={styles.introImage} source={item.image} />
                <Text style={styles.introText}>{item.text}</Text>
            </View>
        )
    }
    return(
        <>
        {showApp ? (
            <SafeAreaView style={styles.container}>
                <CreateUserScreen />
            </SafeAreaView>
        ) : (
            <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}
                doneLabel={"Login"}
                bottomButton
            />
        )}
        </>
    )
};


const slides = [
    {
        key: '1',
        text: 'Welcome to D vs D!',
        title: 'Dieter vs. Dieter',
        image: require('../assets/images/bmi-female.png'),
        backgroundColor: '#20d2bb',
    },
    {
        key: '2',
        text: 'Here is our explanation',
        title: 'Explanation',
        image: require('../assets/images/bmi-female.png'),
        backgroundColor: '#febe29',
    },
    {
        key: '3',
        text: 'Lets get started',
        title: 'getStarted',
        image: require('../assets/images/bmi-female.png'),
        backgroundColor: '#22bcb5',
    },
    {
        key: '4',
        text: 'Login & SignUp',
        title: 'Login and sign up',
        image: require('../assets/images/bmi-female.png'),
        backgroundColor: '#22bcb5',
    },
]
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 100,
    },
    introTitle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold'
    },
    introText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introImage: {
        width: 200,
        height: 200,
    }

})

export default Onboarding;