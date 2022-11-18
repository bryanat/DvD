/**
 * SignupScreen3
 * : gather user data regarding height and weight 
 */

import * as React from 'react'
import { KeyboardAvoidingView, Pressable, StyleSheet, Switch } from 'react-native';
import { Text, View, TextInput } from '../../../components/Themed';
import { AuthContext } from '../../../hooks/AuthProvider';
import axios from 'axios'

export default function SignupScreen3({navigation}) {

  const { state, dispatch } = React.useContext(AuthContext)

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
        id: state.userId,
        height: +heightState ?? null,
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
    <KeyboardAvoidingView style={styles.container}behavior={Platform.OS === "ios" ? "padding" : "height"}>

    <View style={styles.topView}>
      <Text style={styles.topText}>What is your height?</Text>
      <TextInput
        style={[styles.textInput, {width: '90%'}]}
        placeholder="0"
        placeholderTextColor="grey"
        onChangeText={setHeightState}
        value={heightState}
        borderBottomColor='white'
        borderBottomWidth
        autoFocus={true}
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

      <Text style={[styles.topText, {marginTop: '-10'}]}>What is your weight?</Text>
      <TextInput
        style={[styles.textInput, {width: '90%'}]}
        placeholder="0"
        placeholderTextColor="grey"
        borderBottomColor='white'
        borderBottomWidth
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

      <View style={{flex:1, backgroundColor: '#F7A6A4', width: '80%', marginTop: 8}}>
        <Pressable onPress={pressNext} style={[styles.pressableStyle]}>
          <Text style={styles.nextText}>Next</Text>
        </Pressable>
      </View>
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
    backgroundColor: '#F7A6A4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    marginTop: 100,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textInput: {
    fontSize: 30,
    color:'#808080',
    backgroundColor: '#F7A6A4',
    width: '70%',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
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
