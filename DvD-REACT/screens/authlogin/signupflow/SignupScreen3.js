/**
 * SignupScreen3
 * : gather user data regarding height and weight 
 */

import * as React from 'react'
import { Pressable, StyleSheet, Switch } from 'react-native';
import { Text, View, TextInput } from '../../../components/Themed';
import { AuthContext } from '../../../hooks/AuthProvider';
import axios from 'axios'

export default function SignupScreen3({navigation}) {
  const [heightState, setHeightState] = React.useState();
  const [weightState, setWeightState] = React.useState();
  const [weightSwitchState, setWeightSwitchState] = React.useState();
  const [heightSwitchState, setHeightSwitchState] = React.useState();
  const [errorTextState, setErrorTextState] = React.useState();

  const toggleWeightSwitch = () => setWeightSwitchState(previousState => !previousState);
  const toggleHeightSwitch = () => setHeightSwitchState(previousState => !previousState);

  function pressNext() {
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
        style={[styles.pressableStyle, {width: '50%'}]}
        placeholder="type height here"
        placeholderTextColor="white"
        onChangeText={setHeightState}
        value={heightState}
      />
      <View style={{flexDirection: 'row', backgroundColor: '#F7A6A4'}}>
        <Switch 
          trackColor={{ false: "#457B9D", true: "#457B9D" }}
          thumbColor={weightState ? "#faf3ee" : "#faf3ee"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleHeightSwitch}
          value={heightSwitchState}
        />
        <Text>{heightSwitchState ? 'in' : 'cm'}</Text>
      </View>

      <Text style={styles.topText}>What is your weight?</Text>
      <TextInput
        style={[styles.pressableStyle, {width: '50%'}]}
        placeholder="type weight here"
        placeholderTextColor="white"
        onChangeText={setWeightState}
        value={weightState}
      />
      <View style={{flexDirection: 'row', backgroundColor: '#F7A6A4'}}>
        <Switch 
          trackColor={{ false: "#457B9D", true: "#457B9D" }}
          thumbColor={weightState ? "#faf3ee" : "#faf3ee"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleWeightSwitch}
          value={weightSwitchState}
        />
        <Text>{weightSwitchState ? 'kg' : 'lb'}</Text>
      </View>
      

      <Text>{errorTextState}</Text>

      <View style={{flex:1, justifyContent: 'flex-end', backgroundColor: '#F7A6A4'}}>
        <Pressable onPress={pressNext} style={[styles.pressableStyle]}>
          <Text style={styles.nextText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: '#F7A6A4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textInput: {
    color:"white",
    backgroundColor: '#457B9D',
  },
  pressableStyle: {
    backgroundColor:"#457B9D",
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom:10,
    padding:10 
  },
});
