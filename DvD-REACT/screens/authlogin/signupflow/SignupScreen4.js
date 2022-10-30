/**
 * SignupScreen4
 * : gather user data regarding target goal weight
 */

import * as React from 'react'
import { Pressable, StyleSheet } from 'react-native';
import { Text, View, TextInput } from '../../../components/Themed';
import axios from 'axios'

export default function SignupScreen4({navigation}) {
  const [goalweightState, setGoalweightState] = React.useState()

  function pressNext() { 
    axios.put('http://192.168.1.214:8088/users/userdata/goalweight', {
      goalweight: +goalweightState ?? null,
    }).then( function (response) {
      console.log(response.data)
      navigation.navigate('SignupScreen5')
    }).catch( function (error) {
      console.log(error)
    })
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>What is your goal weight?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="type goal height here"
        placeholderTextColor="white"
        onChangeText={setGoalweightState}
        value={goalweightState}
      />

      <View style={{flex:1, justifyContent: 'flex-end'}}>
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
    alignSelf: "center",
    marginTop:10,
    marginBottom:10
  },
  nextText: {

  }
});
