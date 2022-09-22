/**
 * LoginScreen's purpose is to 
 * - take email and password, 
 * - check they authenticate
 * - if yes email and password authenticate set useContext authenticated to true
 * - proceed to HomeScreen, may be a side effect of useContext switching to RootNavigator and not from navigation.navigate('HomeScreen')
 */

import * as React from 'react'
import { StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import { Text, View, TextInput } from '../../components/Themed';
import axios from 'axios'

import { Picker } from '@react-native-picker/picker'
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function LoginScreen({ navigation }) {

  const [axiosState, setAxiosState] = React.useState("dev note: login has not been submitted yet")
  const [nameState, setNameState] = React.useState()

  const [emailState, setEmailState] = React.useState()
  const [passwordState, setPasswordState] = React.useState()

  // method 1 (of two methods) to scale image is being used below
  // method 2 is other method is style={{resizeMode: 'contain', flex:1}} then wrap that in a view with style={{height: screenHeight*0.35}}) 0.35 is scale
  const [screenWidth, screenHeight] = [Dimensions.get('screen').width, Dimensions.get('screen').height] 
  const aspectRatio = screenWidth/824 //divide actual image width (824) by screen width
  const imageHeight = 825*aspectRatio //multiple actual image height (825) by aspect ratio

  // Purpose is to collect email and password and check they authenticate with server
  function loginSubmitPress() {
    // check that email and password state fields are not empty
      // if not empty proceed
      // if empty setAxiosState to "Enter email and password"
    // check email and password authenticate with server by sending them via axios
    axios.get('http://192.168.1.214:8088/logins/getLogin', {
      email: emailState,
      password: passwordState,
    })
      .then( function (response) {
        console.log(response.data)
        setAxiosState(response.data.log ?? "undefined")
      })
      .catch( function (error) {
        console.log(error)
      })
  }
  
  const navigateSignup = () => {
    navigation.navigate('SignupScreen')
  }

  return (
    <View style={styles.topView}>
      <Image 
        style={[{width: screenWidth*0.5, height: imageHeight*0.5}, styles.logo]} 
        source={require('../../assets/images/logo-dieters-sundown.png')} 
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email:"
          placeholderTextColor="white"
          onChangeText={setEmailState}
          value={nameState}
          />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password:"
          placeholderTextColor="white"
          onChangeText={setPasswordState}
          value={nameState}
          />
      </View>
      <Pressable>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </Pressable>
      <Pressable onPress={loginSubmitPress} style={styles.loginBtn}>
        <Text>Login</Text>
      </Pressable>
      {/* <TouchableOpacity onPress={
        () => { {navigateHome}; {axiosPressFunction};  }
      } style={styles.loginBtn}><Text>Login</Text></TouchableOpacity> */}
      <Text style={styles.loginText}>Don't have an account?</Text>
      <Pressable onPress={navigateSignup}>
        <Text style={styles.signUpText}>SignUp</Text>
      </Pressable>
      <Text style={{ color: "#000000" }}>{"\n"}{axiosState}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: '#faf3ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    height:50,
    color:"white"
  },
  logo:{
    marginBottom: 40
  },
  logo2: {
    flex: 1,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#457b9d",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"40%",
    backgroundColor:"#f7a6a4",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  signUpText: {
    color: "black",
    fontSize: 11
  },
  loginText:{
    color:"black",
    fontSize:11  
  },
  pickerAge: {
    backgroundColor: '#ffffff',
    color: '#ff0000',
  },
});
