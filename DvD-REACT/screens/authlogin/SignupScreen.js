import * as React from 'react'
import { StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import { Text, View, TextInput } from '../../components/Themed';
import axios from 'axios'

export default function SignupScreen({ navigation }) {
  const [emailState, setEmailState] = React.useState()
  const [passwordState, setPasswordState] = React.useState()

  // method 1 (of two methods) to scale image is being used below
  // method 2 is other method is style={{resizeMode: 'contain', flex:1}} then wrap that in a view with style={{height: screenHeight*0.35}}) 0.35 is scale
  const [screenWidth, screenHeight] = [Dimensions.get('screen').width, Dimensions.get('screen').height] 
  const aspectRatio = screenWidth/824 //divide actual image width (824) by screen width
  const imageHeight = 825*aspectRatio //multiple actual image height (825) by aspect ratio

  function signupSubmitPress() {
    axios.put('http://192.168.1.214:8088/logins/signup', {
      email: emailState,
      password: passwordState,
    })
      .then( function (response) {
        console.log(response.data.log ?? "undefined")
        navigation.navigate('LoginScreen')
      })
      .catch( function (error) {
        console.log(error)
      })
  }

  const onSkip = () => {
    navigation.navigate('LoginScreen')
  }

  return (
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password:"
          placeholderTextColor="white"
          onChangeText={setPasswordState}
          value={passwordState}
          />
      </View>
      <Pressable>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </Pressable>
      <Pressable onPress={signupSubmitPress} style={styles.loginBtn}>
        <Text>Signup</Text>
      </Pressable>
      {/* <TouchableOpacity onPress={
        () => { {navigateHome}; {axiosPressFunction};  }
      } style={styles.loginBtn}><Text>Login</Text></TouchableOpacity> */}
      <Text style={styles.loginText}>Already have an account?</Text>
      <Pressable onPress={onSkip}>
        <Text style={styles.signUpText}>Back to Login</Text>
      </Pressable>
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
    marginBottom: 40,
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
