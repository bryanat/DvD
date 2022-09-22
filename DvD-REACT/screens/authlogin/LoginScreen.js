import * as React from 'react'
import { StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Text, View, TextInput } from '../../components/Themed';

import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function LoginScreen() {

  const [axiosState, setAxiosState] = React.useState("Put Axios (before)")
  const [nameState, setNameState] = React.useState();

  return (
    <View style={styles.topView}>
      <Text style={styles.logo}>DvD</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email:"
          placeholderTextColor="white"
          onChangeText={setNameState}
          value={nameState}
          />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password:"
          placeholderTextColor="white"
          onChangeText={setNameState}
          value={nameState}
          />
      </View>
      <Pressable>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </Pressable>
      <Pressable onPress={
        () => { {axiosPressFunction};  }
        } style={styles.loginBtn}><Text>Login</Text>
      </Pressable>
      {/* <TouchableOpacity onPress={
        () => { {navigateHome}; {axiosPressFunction};  }
      } style={styles.loginBtn}><Text>Login</Text></TouchableOpacity> */}
      <Text style={styles.loginText}>Don't have an account?</Text>
      <Pressable>
        <Text style={styles.signUpText}>SignUp</Text>
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
