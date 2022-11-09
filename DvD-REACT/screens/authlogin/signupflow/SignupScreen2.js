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
        id: '635c92e17d2c3098af42b94d' ?? null,
        age: 56 ?? null,
        random: 'tmpx' ?? null,
      }).then( function (response) {
        console.log(response.data)
        navigation.navigate('SignupScreen3')
      }).catch( function (error) {
        console.log(error)
      })
  }

  const backgroundColorPressed = '#FFFFFF'
  const backgroundColorNotPressed = '#457B9D'

  return (
    <View style={styles.topView}>
      <View style={{backgroundColor: '#F7A6A4'}}>
      <Text style={styles.topText}>What is your goal?</Text>
      <Text>{goalState}</Text>

      <Pressable onPress={pressEatHealthier} style={({pressed}) => [ pressed
        ? [styles.pressableStyle, {backgroundColor: backgroundColorPressed}] //if pressed
        : [styles.pressableStyle, {backgroundColor: backgroundColorNotPressed}] //if not pressed
      ]}>
        <Text>eat healthier</Text>
      </Pressable>

      <Pressable onPress={pressLoosingWeight} style={({pressed}) => [ pressed
        ? [styles.pressableStyle, {backgroundColor: backgroundColorPressed}] //if pressed
        : [styles.pressableStyle, {backgroundColor: backgroundColorNotPressed}] //if not pressed
      ]}>
        <Text>loosing weight</Text>
      </Pressable>

      <Pressable onPress={pressGetMuscle} style={({pressed}) => [ pressed
        ? [styles.pressableStyle, {backgroundColor: backgroundColorPressed}] //if pressed
        : [styles.pressableStyle, {backgroundColor: backgroundColorNotPressed}] //if not pressed
      ]}>
        <Text>get muscle</Text>
      </Pressable>

      <Pressable onPress={pressBodyPositive} style={({pressed}) => [ pressed
        ? [styles.pressableStyle, {backgroundColor: backgroundColorPressed}] //if pressed
        : [styles.pressableStyle, {backgroundColor: backgroundColorNotPressed}] //if not pressed
      ]}>
        <Text>feel better about my body</Text>
      </Pressable>
      </View>

      <View style={{backgroundColor: '#F7A6A4'}}>
        <Text>IMAGE</Text>
      </View>

      <View style={{flex:1, justifyContent: 'flex-end', backgroundColor: '#F7A6A4'}}>
        <Pressable onPress={pressNext} style={[styles.pressableStyle, {backgroundColor: '#457B9D'}]}>
          <Text>Next</Text>
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
  pressableStyle: {
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom:10,
    padding:10 
  },
});
