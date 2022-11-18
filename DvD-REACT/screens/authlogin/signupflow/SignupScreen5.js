/**
 * SignupScreen5
 * : gather user data regarding gender and birthday
 */

import * as React from 'react'
import { Pressable, StyleSheet, Button } from 'react-native';
import { Text, View, TextInput } from '../../../components/Themed';
import { AuthContext } from '../../../hooks/AuthProvider';
import axios from 'axios'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function SignupScreen5({navigation}) {
  const { state, dispatch } = React.useContext(AuthContext)

  const [genderState, setGenderState] = React.useState()
  const [birthdayState, setBirthdayState] = React.useState() 

  //////gender-logic//////
  //const pressMale = () => setGenderState('male')
  function pressMale() {
    setGenderState('male')
  }
  //const pressFemale = () => setGenderState('female')
  function pressFemale() {
    setGenderState('female')
  }
  ////////////////////////

  ///////birthday-datepicker-logic///////
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setBirthdayState(date.toDateString())
    hideDatePicker();
  };
  ////////////////////////////////////////

  function pressNext() {
    axios.put('http://192.168.1.236:8088/users/userdata/genderbirthday', {
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
      <Text>{genderState}</Text>
      <View style={{flexDirection: 'row', backgroundColor: '#F7A6A4'}}>
        <Pressable onPress={pressMale} style={({pressed}) => [ pressed
          ? [styles.buttonStyle, {backgroundColor:'#FFFFFF'}] //if pressed
          : [styles.buttonStyle, {backgroundColor:'#457B9D'}] //if not pressed
        ]}>
          <Text>Male</Text>
        </Pressable>
        <Pressable onPress={pressFemale} style={({pressed}) => [ pressed
          ? [styles.buttonStyle, {backgroundColor:'#FFFFFF'}] //if pressed
          : [styles.buttonStyle, {backgroundColor:'#457B9D'}] //if not pressed
        ]}>
          <Text>Female</Text>
        </Pressable>
      </View>

      <Text style={styles.topText}>Birthday?</Text>
      <Text>{birthdayState}</Text>
      <Button title='Pick Birthday' onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <View style={{flex:1, backgroundColor: '#F7A6A4', width: '80%', marginTop: 20}}>
        <Pressable onPress={pressNext} style={[styles.pressableStyle, {backgroundColor: '#457B9D', marginBottom: 10}]}>
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
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textInput: {
    color:'white',
    backgroundColor: '#457B9D',
  },
  pressableStyle: {
    borderRadius:25,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    marginTop:350,
    padding:10,
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
