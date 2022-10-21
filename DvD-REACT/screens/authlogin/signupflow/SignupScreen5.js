/**
 * SignupScreen5
 * : gather user data regarding gender and birthday
 */

import * as React from 'react'
import { Pressable, StyleSheet } from 'react-native';
import { Text, View, TextInput } from '../../../components/Themed';
import axios from 'axios'

export default function SignupScreen5({navigation}) {
  const [genderState, setGenderState] = React.useState()
  const [birthdayState, setBirthdayState] = React.useState()

  function pressableNext() {
    axios.put('http://192.168.1.214:8088/users/userdata/genderbirthday', {
      gender: +genderState ?? null,
      birthday: +birthdayState ?? null,
    }).then( function (response) {
      console.log(response.data)
      navigation.navigate('LoginScreen')
    }).catch( function (error) {
      console.log(error)
    })
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Gender?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="type gender here (switch/button later)"
        placeholderTextColor="white"
        onChangeText={setGenderState}
        value={genderState}
      />
      <Text style={styles.topText}>Birthday?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="type birthday here"
        placeholderTextColor="white"
        onChangeText={setBirthdayState}
        value={birthdayState}
      />
      <Pressable onPress={pressableNext} style={styles.nextPressable}>
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
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
