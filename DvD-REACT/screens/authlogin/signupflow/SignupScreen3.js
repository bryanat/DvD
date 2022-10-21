/**
 * SignupScreen3
 * : gather user data regarding height and weight 
 */

import * as React from 'react'
import { Pressable, StyleSheet, Switch } from 'react-native';
import { Text, View, TextInput } from '../../../components/Themed';
import axios from 'axios'

export default function SignupScreen3({navigation}) {
  const [heightState, setHeightState] = React.useState();
  const [weightState, setWeightState] = React.useState();
  const [weightSwitchState, setWeightSwitchState] = React.useState();
  const [errorTextState, setErrorTextState] = React.useState();

  const toggleWeightSwitch = () => setWeightSwitchState(previousState => !previousState);

  function pressableNext() {
    // will add numeric type checking later
    // skipping conditional if logic right now while developing screens (for speed)
    //if (heightState != undefined && weightState != undefined) {
      axios.put('http://192.168.1.214:8088/users/userdata/heightweight', {
        heigth: +heightState ?? null,
        weight: +weightState ?? null,
      }).then( function (response) {
        console.log(response.data)
        navigation.navigate('SignupScreen4')
      }).catch( function (error) {
        console.log(error)
      })
    //} else {
    //  setErrorTextState('Enter height and weight to continue to next screen')
    //}
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>What is your height?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="type height here"
        placeholderTextColor="white"
        onChangeText={setHeightState}
        value={heightState}
      />
      <Text style={styles.topText}>What is your weight?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="type weight here"
        placeholderTextColor="white"
        onChangeText={setWeightState}
        value={weightState}
      />
      <Switch 
        trackColor={{ false: "#f7a6a4", true: "#457B9D" }}
        thumbColor={weightState ? "#faf3ee" : "#faf3ee"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleWeightSwitch}
        value={weightSwitchState}
      />
      <Pressable onPress={pressableNext} style={styles.nextPressable}>
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
      <Text>{errorTextState}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
  },
  topText: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputHeight: {
    height:50,
    color:"white"
  },
  inputWeight: {
    height:50,
    color:"white"
  },
  nextPressable: {
    width:"40%",
    backgroundColor:"#457b9d",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  nextText: {

  }
});
