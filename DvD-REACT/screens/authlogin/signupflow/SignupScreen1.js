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
import { localIpAddress } from '../../../constants/Network';
import * as ImagePicker from 'expo-image-picker'

export default function SignupScreen1({navigation}) {
  const { state, dispatch } = React.useContext(AuthContext)
  const [nameState, setNameState] = React.useState()
  const [imageState, setImageState] = React.useState()

  const pressPickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setImageState(result.assets[0].uri)
    }
  }


  function pressNext() {
    axios.put(`http://${localIpAddress}:8088/users/userdata/name`, {
      id: state.userId,
      name: nameState ?? null,
    }).then( function (response) {
      console.log(response.data)
      navigation.navigate('SignupScreen2')
    }).catch( function (error) {
      console.log(error)
    })
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>What's your name?</Text>
      {/* <Text>{nameState}</Text> */}
        <TextInput
          style={[styles.textInput, {width: '90%'}]}
          placeholder="Your name"
          placeholderTextColor="grey"
          onChangeText={setNameState}
          value={nameState}
          borderBottomColor='white'
          autoFocus={true}
        />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7A6A4' }}>
        <Button title="Pick an image from camera roll" onPress={pressPickImage} />
        {imageState && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      <View style={{ backgroundColor: '#F7A6A4', width: '80%'}}>
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
    marginTop:240,
    marginBottom:10,
    padding:10,
  },
});
