import * as React from 'react'
import { StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Text, View, TextInput } from './Themed'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Navigation from '../navigation'
import Onboarding from './Onboarding'
export default function AxiosButtonPut({uri, title, navigation}) {
  const [axiosState, setAxiosState] = React.useState("Put Axios (before)")
  const [nameState, setNameState] = React.useState();
  const [ageState, setAgeState] = React.useState();
  const [weightState, setWeightState] = React.useState();
  const [heightState, setHeightState] = React.useState();
  const [sexState, setSexState] = React.useState();
  const [colorState, setColorState] = React.useState();

  function axiosPressFunction() {
    axios.put(uri, {
      name: nameState ?? null, //'Justin Timberlake'
      age: +ageState ?? null, //36
      weight: +weightState ?? null, //168
      height: +heightState ?? null, //73
      sex: sexState ?? null,
      color: colorState ?? null, //'#ff0000'
    })
      .then( function (response) {
        console.log(response.data)
        const returnedUser = response.data
        setAxiosState(response.data.log ?? "undefined")
      })
      .catch( function (error) {
        console.log(error)
      })
  }

  // const navigate = useNavigate();

  // const navigateHome = () => {
  //   navigate('Onboarding');
  // };

  // const navigateSignUp = () => {
  //   navigate('/')
  // };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={
        () => { {axiosPressFunction};  }
      } style={styles.loginBtn}><Text>Login</Text></TouchableOpacity>
      {/* <TouchableOpacity onPress={
        () => { {navigateHome}; {axiosPressFunction};  }
      } style={styles.loginBtn}><Text>Login</Text></TouchableOpacity> */}
      <Text style={styles.loginText}>Don't have an account?</Text>
      <TouchableOpacity>
        <Text style={styles.signUpText}>SignUp</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf3ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    height:50,
    color:"white"
  },
  inputViewName: {
  },
  inputViewAge: {
  },
  inputViewWeight: {
  },
  inputViewHeight: {
  },
  inputViewSex: {
  },
  inputViewColor: {
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

})
