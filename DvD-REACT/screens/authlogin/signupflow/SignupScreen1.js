/**
 * SignupScreen5
 * : gather user data regarding name
 */

import * as React from 'react'
import { Pressable, StyleSheet, Button } from 'react-native';
import { Text, View, TextInput } from '../../../components/Themed';
import { AuthContext } from '../../../hooks/AuthProvider';
import axios from 'axios'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function SignupScreen1({navigation}) {
  const { state, dispatch } = React.useContext(AuthContext)

  const [nameState, setNameState] = React.useState()

  function pressNext() {
    axios.put('http://192.168.1.214:8088/users/userdata/genderbirthday', {
      name: +nameState ?? null,
    }).then( function (response) {
      console.log(response.data)
      navigation.navigate('SignupScreen2')
    }).catch( function (error) {
      console.log(error)
    })
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Name?</Text>
      <Text>{nameState}</Text>
      <TextInput
        style={[styles.pressableStyle, {width: '50%'}]}
        placeholder="type name here"
        placeholderTextColor="white"
        onChangeText={setNameState}
        value={nameState}
      />

      <View style={{flex:1, justifyContent: 'flex-end', backgroundColor: '#F7A6A4'}}>
        <Pressable onPress={pressNext} style={styles.pressableStyle}>
          <Text style={styles.nextText}>Done</Text>
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
    color:'white',
    backgroundColor: '#457B9D',
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
  buttonStyle:{
    width:'40%',
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom:10
  },
});
