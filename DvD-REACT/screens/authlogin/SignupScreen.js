import * as React from 'react'
import { StyleSheet, Pressable, Image, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Text, View, TextInput } from '../../components/Themed';
import { AuthContext } from '../../hooks/AuthProvider';
import axios from 'axios'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
import { localIpAddress } from '../../constants/Network';

export default function SignupScreen({ navigation }) {

  const { state, dispatch } = React.useContext(AuthContext);

  const [emailState, setEmailState] = React.useState('')
  const [passwordState, setPasswordState] = React.useState('')
  const [emailValidityState, setEmailValidityState] = React.useState('')
  const [passwordValidityState, setPasswordValidityState] = React.useState('')

  // method 1 (of two methods) to scale image is being used below
  // method 2 is other method is style={{resizeMode: 'contain', flex:1}} then wrap that in a view with style={{height: screenHeight*0.35}}) 0.35 is scale
  const [screenWidth, screenHeight] = [Dimensions.get('screen').width, Dimensions.get('screen').height] 
  const aspectRatio = screenWidth/824 //divide actual image width (824) by screen width
  const imageHeight = 825*aspectRatio //multiple actual image height (825) by aspect ratio

  function pressGoogleAuth() {
    console.log('Google Auth pressed')
  }

  function pressAppleAuth() {
    console.log('Apple Auth pressed')
  }

  function devSignupSubmitPress() {
    // set username = 'devuser' (to put user data somewhere)
    dispatch({type: 'DEV_TOKEN'})
    navigation.navigate('SignupScreen1')
  }

  function signupSubmitPress() {
    // if email has valid format similar to blahblahblah@mail.com
    if (emailState.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) != null) {
      setEmailValidityState('')
      // if password has at least 8 characters, one letter, one number (checked via regex match)
      if (passwordState.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) != null) {
        setPasswordValidityState('')
        axios.put(`http://${localIpAddress}:8088/users/signup`, {
          email: emailState,
          password: passwordState,
        })
          .then( function (response) {
            console.log(response.data.log ?? "undefined")
            navigation.navigate('SignupScreen1')
          })
          .catch( function (error) {
            console.log(error)
          })
      } else {
        setPasswordValidityState("Enter a valid password containing at least one letter and one number")
        console.log("enter a valid password")
      }
    } else {
      setEmailValidityState("Enter a valid email address in the format: blahblahblah@mail.com")
      console.log("enter an email address in the format: abcdefgh@mail.com")
    }
  }

  const onSkip = () => {
    navigation.navigate('LoginScreen')
  }

  return (
    <KeyboardAvoidingView style={styles.container}behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <View style={styles.topView}>
      <Image 
        style={[{width: screenWidth*0.5, height: imageHeight*0.5}, styles.logo]} 
        source={require('../../assets/images/logo-dieters-hippieblue.png')} 
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email:"
          placeholderTextColor="white"
          onChangeText={setEmailState}
          value={emailState}
          />
      </View>
      <Text style={styles.validityText}>{emailValidityState}</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password:"
          placeholderTextColor="white"
          onChangeText={setPasswordState}
          value={passwordState}
          />
      </View>
      <Text style={styles.validityText}>{passwordValidityState}</Text>
      {/* Need to be changed with Google OAUTH */}
      <FontAwesome5  onPress={pressGoogleAuth} name="google" size={24} color="black" />
      {/* Need to be changed with Apple OAUTH */}
      <Foundation onPress={pressAppleAuth} name="social-apple" size={24} color="black" />
      <Pressable>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </Pressable>
      <Pressable onPress={signupSubmitPress} style={styles.loginBtn}>
        <Text>Signup</Text>
      </Pressable>
      <Pressable onPress={devSignupSubmitPress} style={styles.loginBtn}>
        <Text>Dev Signup Button</Text>
      </Pressable>
      <Pressable onPress={onSkip}>
        <Text style={styles.validityLoginButtonText}></Text>
        {/* <TouchableOpacity onPress={
          () => { {navigateHome}; {axiosPressFunction};  }
        } style={styles.loginBtn}><Text>Login</Text></TouchableOpacity> */}
        <Text style={styles.loginText}>Already have an account?</Text>
        <Text style={styles.signUpText}>Back to Login</Text>
      </Pressable>
  </View>
  </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
   },
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
    marginTop: 40,
    marginBottom: 20
  },
  inputView:{
    width:"80%",
    backgroundColor:"#f7a6a4",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  validityText: {
    color:"black",
    fontSize:11,
    marginTop: -20,
    marginBottom: 7,
  },
  validityLoginButtonText: {
    color: "black",
    fontSize: 11,
    marginTop: -10,
    marginBottom: 7,
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"40%",
    backgroundColor:"#457b9d",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  signUpText: {
    color: "black",
    fontSize: 11,
    textAlign: "center",
  },
  loginText:{
    color:"black",
    fontSize:11,
    textAlign: "center",
  },
  pickerAge: {
    backgroundColor: '#ffffff',
    color: '#ff0000',
  },
});
