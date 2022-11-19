/**
 * SignupScreen4
 * : gather user data regarding target goal weight
 */

import * as React from 'react'
import { KeyboardAvoidingView, Pressable, StyleSheet } from 'react-native';
import { Text, View, TextInput } from '../../../components/Themed';
import { AuthContext } from '../../../hooks/AuthProvider';
import axios from 'axios'
import { localIpAddress } from '../../../constants/Network';

export default function SignupScreen4({navigation}) {

  const { state, dispatch } = React.useContext(AuthContext)

  const [goalweightState, setGoalweightState] = React.useState()

  function pressNext() { 
    axios.put(`http://${localIpAddress}:8088/users/userdata/goalweight`, {
      id: state.userId,
      goalweight: +goalweightState ?? null,
    }).then( function (response) {
      console.log(response.data)
      navigation.navigate('SignupScreen5')
    }).catch( function (error) {
      console.log(error)
    })
  }

  return (
    <KeyboardAvoidingView style={styles.container}behavior={Platform.OS === "ios" ? "padding" : "height"}>

    <View style={styles.topView}>
      <Text style={styles.topText}>What is your goal weight?</Text>
      <View style={{flexDirection: 'row', backgroundColor: '#F7A6A4'}}>
      <TextInput
        style={[styles.textInput, {width: '85%'}]}
        placeholder='goal weight here'
        placeholderTextColor='white'
        onChangeText={setGoalweightState}
        value={goalweightState}
        borderBottomColor='white'
        autoFocus={true}
      />
      {/** get 'lb' or 'kg' from stored user data via axios call */}
      <Text style={{alignSelf: 'center', paddingLeft: 5, marginTop: 35}}>{true ? 'lb' : 'kg'}</Text>
      </View>


      <View style={{flex:1, backgroundColor: '#F7A6A4',  width: '80%'}}>
        <Pressable onPress={pressNext} style={styles.pressableStyle}>
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
    backgroundColor:'#457B9D',
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom:10,
    padding:10 
  },
});
