import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from "react-native"

import AppIntroSlider from 'react-native-app-intro-slider'
import CreateUserScreen from '../CreateUserScreen';
const OnboardingScreen = ({ navigation }) => {

    const [showApp, setShowApp] = useState(false);
    // const context = useContext(AuthContext)

    const [screenWidth, screenHeight] = [Dimensions.get('screen').width, Dimensions.get('screen').height]
    const aspectRatio = screenWidth/906 //divide by screen width by actual image width (612)
    // fullImageSize is: {width: screenWidth, height: 1483*aspectRatio}
    // need to multiply fullImageSize*shrink to center it at a good size
    //{maxWidth: screenWidth, maxHeight: screenHeight*0.5, width: screenWidth, height: 1000}

    const onDone = () => {
        navigation.navigate('LoginScreen')
    }

    const onSkip = () => {
        navigation.navigate('LoginScreen')
    }

    const RenderItem = ({ item }) => {
        return (
            <View style={[{backgroundColor: item.backgroundColor}, styles.container]}>
                <Text style={styles.introTitle}>{item.title}</Text>
                    <View style={{height: screenHeight*0.45}}>
                        <Image style={[styles.introImage]} source={item.image} />
                    </View>
                <Text style={styles.introText}>{item.text}</Text>
            </View>
        )
    }
    return(
        <>
        {showApp ? (
            // <SafeAreaView style={styles.container}>
                <CreateUserScreen />
            // </SafeAreaView>
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
        text: 'Welcome to Dieter vs Dieter!',
        title: 'Welcome!',
        image: require('../../assets/images/logo-dieters-sundown.png'),
        backgroundColor: '#F7A6A4',
    },
    {
        key: '2',
        text: 'Here is our explanation',
        title: 'Explanation',
        image: require('../../assets/images/health-charts.jpg'),
        backgroundColor: '#457B9D',
    },
    {
        key: '3',
        text: 'Lets get started',
        title: 'getStarted',
        image: require('../../assets/images/personal-challenge-onboarding.jpg'),
        backgroundColor: '#F7A6A4',
    },
    {
        key: '4',
        text: 'Login & SignUp',
        title: 'Login and sign up',
        image: require('../../assets/images/tmp-blog-img.jpg'),
        backgroundColor: '#457B9D',
    },
]
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 1,
        resizeMode: 'contain'
    },

})

export default OnboardingScreen;
