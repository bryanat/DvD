/**
 * SignupScreen2
 * : gather user data regarding health diet and objective
 * : data will be used in future recommender system (ML)
 */

import * as React from 'react'
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';
import axios from 'axios'
import { AuthContext } from '../../../hooks/AuthProvider';
import * as SecureStore from 'expo-secure-store'

export default function SignupScreen2({navigation}) {
  
  const { authState } = React.useContext(AuthContext)
  // const userIDFromAuthContextToken = React.useContext(AuthContext).token._3
  // next step is how to integrate userId (mongoId) into authState.userToken

  const [goalState, setGoalState] = React.useState()

  function pressEatHealthier() {
    setGoalState('eat healthier')
  }
  function pressLoosingWeight() {
    setGoalState('loosing weight')
  }
  function pressGetMuscle() {
    setGoalState('get muscle')
  }
  function pressBodyPositive() {
    setGoalState('body positive')
  }

  function pressNext() {
    axios.put('http://192.168.1.214:8088/users/userdata/goal', {
        // id: userIDFromAuthContextToken ?? null,
        // id: authState.userToken ?? null,
        id: 'tmpId' ?? null,
        age: 55 ?? null,
        random: 'tmpxx' ?? null,
      }).then( function (response) {
        console.log(response.data)
        navigation.navigate('SignupScreen3')
      }).catch( function (error) {
        console.log(error)
      })
  }

  return (
    <View style={styles.topView}>
      <View style={{backgroundColor: '#faf3ee'}}>
      <Text style={styles.topText}>What is your goal?</Text>
      <Text>{goalState}</Text>

      <Pressable onPress={pressEatHealthier} style={({pressed}) => [ pressed
        ? [styles.buttonStyle, {backgroundColor:"#FFFFFF"}] //if pressed
        : [styles.buttonStyle, {backgroundColor:"#457B9D"}] //if not pressed
      ]}>
        <Text>eat healthier</Text>
      </Pressable>

      <Pressable onPress={pressLoosingWeight} style={({pressed}) => [ pressed
        ? [styles.buttonStyle, {backgroundColor:"#FFFFFF"}] //if pressed
        : [styles.buttonStyle, {backgroundColor:"#457B9D"}] //if not pressed
      ]}>
        <Text>loosing weight</Text>
      </Pressable>

      <Pressable onPress={pressGetMuscle} style={({pressed}) => [ pressed
        ? [styles.buttonStyle, {backgroundColor:"#FFFFFF"}] //if pressed
        : [styles.buttonStyle, {backgroundColor:"#457B9D"}] //if not pressed
      ]}>
        <Text>get muscle</Text>
      </Pressable>

      <Pressable onPress={pressBodyPositive} style={({pressed}) => [ pressed
        ? [styles.buttonStyle, {backgroundColor:"#FFFFFF"}] //if pressed
        : [styles.buttonStyle, {backgroundColor:"#457B9D"}] //if not pressed
      ]}>
        <Text>feel better about my body</Text>
      </Pressable>
      </View>

      <View style={{flex:1, justifyContent: 'flex-end', backgroundColor: '#faf3ee'}}>
        <Pressable onPress={pressNext} style={styles.nextPressable}>
          <Text style={styles.nextText}>Next</Text>
        </Pressable>
      </View>
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
  topText: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonStyle:{
    width:"40%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  nextPressable: {
    width:"40%",
    backgroundColor:"#457b9d",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    alignSelf: "center",
    marginTop:10,
    marginBottom:10
  },
  nextText: {

  }
});
