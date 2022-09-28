import * as React from 'react'
import { StyleSheet, Pressable, TouchableOpacity, Switch } from 'react-native'
import { Text, View, TextInput } from '../../components/Themed'
import axios from 'axios'
import { AuthContext } from '../../hooks/AuthProvider';


export default function IntroDataScreen() {
  const { isAuthenticated, setIsAuthenticated } = React.useContext(AuthContext)

  const [nameState, setNameState] = React.useState();
  const [ageState, setAgeState] = React.useState();
  const [weightState, setWeightState] = React.useState();
  const [heightState, setHeightState] = React.useState();
  const [sexState, setSexState] = React.useState(false);

  const toggleMaleFemaleSwitch = () => setSexState(previousState => !previousState);

  function axiosPressFunction() {
    axios.put('http://192.168.1.214:8088/users/userdata', {
      name: nameState ?? null, 
      //replace age with birthdate
      age: +ageState ?? null,
      weight: +weightState ?? null,
      height: +heightState ?? null,
      sex: sexState ?? null,
    })
      .then( function (response) {
        console.log(response.data)
        const returnedUser = response.data
      })
      .catch( function (error) {
        console.log(error)
      })
    setIsAuthenticated(true) //TEMPORARY
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>User Data</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name:"
          placeholderTextColor="white"
          onChangeText={setNameState}
          value={nameState}
          />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Age:"
          placeholderTextColor="white"
          onChangeText={setAgeState}
          value={ageState}
          />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Weight (lbs/kg):"
          placeholderTextColor="white"
          onChangeText={setWeightState}
          value={weightState}
          />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Height (inches/cm):"
          placeholderTextColor="white"
          onChangeText={setHeightState}
          value={heightState}
          />
      </View>
      <Switch 
        trackColor={{ false: "#f7a6a4", true: "#457B9D" }}
        thumbColor={sexState ? "#faf3ee" : "#faf3ee"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleMaleFemaleSwitch}
        value={sexState}
      />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={axiosPressFunction} style={styles.loginBtn}>
        <Text>Login</Text>
      </TouchableOpacity>
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
