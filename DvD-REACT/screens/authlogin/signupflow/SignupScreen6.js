/**
 * SignupScreen6
 * : gather user data regarding gender and birthday
 */

import * as React from 'react'
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';
import axios from 'axios'

export default function SignupScreen6({navigation}) {
  function pressableNext() {
    navigation.navigate('LoginScreen')
  }
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Gender?</Text>
      <Pressable onPress={pressableNext} style={styles.nextPressable}>
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1
  },
  topText: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
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
