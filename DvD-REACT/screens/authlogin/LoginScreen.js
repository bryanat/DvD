import * as React from 'react'
import { StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Text, View, TextInput } from '../../components/Themed';
import axios from 'axios'

import { Picker } from '@react-native-picker/picker'
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function LoginScreen() {

  const [axiosState, setAxiosState] = React.useState("login has not been submitted yet")
  const [nameState, setNameState] = React.useState()

  const [emailState, setEmailState] = React.useState()
  const [passwordState, setPasswordState] = React.useState()

  function loginSubmitPress() {
    axios.put('http://192.168.1.214:8088/logins/putLogin', {
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

  return (
    <View style={styles.topView}>
      <Text style={styles.logo}>DvD</Text>
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
      <Pressable>
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
    fontWeight:"bold",
    fontSize:50,
    color:"#1D3557",
    marginBottom:40
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
