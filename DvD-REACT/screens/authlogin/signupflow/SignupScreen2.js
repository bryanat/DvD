/**
 * SignupScreen2
 * : gather user data regarding health diet and objective
 * : data will be used in future recommender system (ML)
 */

import * as React from 'react'
import { Pressable, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, View } from '../../../components/Themed';
import axios from 'axios'
import { AuthContext } from '../../../hooks/AuthProvider';
import * as SecureStore from 'expo-secure-store'

export default function SignupScreen2({navigation}) {
  
  const { authState } = React.useContext(AuthContext)
  // const userIDFromAuthContextToken = React.useContext(AuthContext).token._3
  // next step is how to integrate userId (mongoId) into authState.userToken

  const [goalState, setGoalState] = React.useState()
  const [imageState, setImageState] = React.useState(require('../../../assets/images/gaining-muscle.png'))

  const screenHeight = Dimensions.get('screen').height

  const imageEatingHealthier = require('../../../assets/images/gaining-muscle.png');
  const imageLosingWeight = require('../../../assets/images/loving-my-body.png');
  const imageGainingMuscle = require('../../../assets/images/gaining-muscle.png');
  const imageLovingMyBody = require('../../../assets/images/loving-my-body.png');


  function pressEatingHealthier() {
    setImageState(imageEatingHealthier)
    setGoalState('eating healthier')
  }
  function pressLosingWeight() {
    setImageState(imageLosingWeight)
    setGoalState('losing weight')
  }
  function pressGainingMuscle() {
    setImageState(imageGainingMuscle)
    setGoalState('gaining muscle')
  }
  function pressLovingMyBody() {
    setImageState(imageLovingMyBody)
    setGoalState('loving my body')
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

        <Pressable onPress={pressEatingHealthier} style={({pressed}) => [ pressed
          ? [styles.pressableStyle, {backgroundColor: backgroundColorPressed}] //if pressed
          : [styles.pressableStyle, {backgroundColor: backgroundColorNotPressed}] //if not pressed
        ]}>
          <Text>eating healthier</Text>
        </Pressable>

        <Pressable onPress={pressLosingWeight} style={({pressed}) => [ pressed
          ? [styles.pressableStyle, {backgroundColor: backgroundColorPressed}] //if pressed
          : [styles.pressableStyle, {backgroundColor: backgroundColorNotPressed}] //if not pressed
        ]}>
          <Text>losing weight</Text>
        </Pressable>

        <Pressable onPress={pressGainingMuscle} style={({pressed}) => [ pressed
          ? [styles.pressableStyle, {backgroundColor: backgroundColorPressed}] //if pressed
          : [styles.pressableStyle, {backgroundColor: backgroundColorNotPressed}] //if not pressed
        ]}>
          <Text>gaining muscle</Text>
        </Pressable>

        <Pressable onPress={pressLovingMyBody} style={({pressed}) => [ pressed
          ? [styles.pressableStyle, {backgroundColor: backgroundColorPressed}] //if pressed
          : [styles.pressableStyle, {backgroundColor: backgroundColorNotPressed}] //if not pressed
        ]}>
          <Text>loving my body</Text>
        </Pressable>
      </View>


      <View style={{height: screenHeight*0.45, backgroundColor: '#F7A6A4'}}>
        <Image style={{flex: 1, resizeMode: 'contain'}} source={imageState} />
      </View>


      <Text style={{marginBottom:0}}>{goalState}</Text>
      <View style={{flex:1, justifyContent: 'flex-end', backgroundColor: '#F7A6A4'}}>
        <Pressable onPress={pressNext} style={[styles.pressableStyle, {backgroundColor: '#457B9D', marginBottom: 10}]}>
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
    marginTop: 50,
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
    padding:10 
  },
});
