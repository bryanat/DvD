import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from "react-native"

import AppIntroSlider from 'react-native-app-intro-slider'
import HomeScreen from '../home/HomeScreen';
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
        // useContext authenticated=false // guest mode
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
                <HomeScreen />
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
        text: "Compete with other users who are also dieting and exercising. Why? For extra motivation, just for fun, or for those who really don't like losing. Keep up with the community that is keeping up with themselves.",
        title: 'Dieter Vs Dieter',
        image: require('../../assets/images/dieters-red-vs-blue-middle.png'),
        backgroundColor: '#457B9D',
    },
    {
        key: '3',
        text: 'Create an account to commit to personal goals and challenges. Watch your progress grow as you hit new personal records.',
        title: 'Challenge Yourself With Personal Challenges!',
        image: require('../../assets/images/personal-challenge-onboarding.jpg'),
        backgroundColor: '#F7A6A4',
    },
    {
        key: '4',
        text: "If you don't sign up I'll beat you up.",
        title: 'SignUp & Login',
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
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        fontWeight: 'bold'
    },
    introText: {
        fontSize: 17,
        color: 'white',
        paddingVertical: 30,
        textAlign: 'justify',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    introImage: {
        flex: 1,
        resizeMode: 'contain',
    },
})

export default OnboardingScreen;
