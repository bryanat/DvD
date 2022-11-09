/**
 * SignupScreen4
 * : gather user data regarding target goal weight
 */

import * as React from 'react'
import { Pressable, StyleSheet } from 'react-native';
import { Text, View, TextInput } from '../../../components/Themed';
import { AuthContext } from '../../../hooks/AuthProvider';
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
      <View style={{flexDirection: 'row', backgroundColor: '#F7A6A4'}}>
      <TextInput
        style={[styles.pressableStyle, {width: '50%'}]}
        placeholder="type goal weight here"
        placeholderTextColor="white"
        onChangeText={setGoalweightState}
        value={goalweightState}
      />
      {/** get 'lb' or 'kg' from stored user data via axios call */}
      <Text style={{alignSelf: 'center', paddingLeft: 5}}>{true ? 'lb' : 'kg'}</Text>
      </View>


      <View style={{flex:1, justifyContent: 'flex-end', backgroundColor: '#F7A6A4'}}>
        <Pressable onPress={pressNext} style={styles.pressableStyle}>
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
