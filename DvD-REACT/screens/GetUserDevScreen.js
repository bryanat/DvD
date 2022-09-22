import * as React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Text, View } from '../components/Themed';
import axios from 'axios'


export default function GetUserDevScreen() {
  const [axiosState, setAxiosState] = React.useState("Axios get with email data")

  // express api endpoint that axios is hitting
  const uri = "http://192.168.1.214:8088/logins/getLogin"
  const title = "/logins/getLogin"

  function axiosPressFunction() {
    //axios.get(uri, {
    axios({
      method: 'put',
      url: uri,
      data: {
        // <TextInput> to [emailState] to axios.data.email
        email: 'user1111@gmail.com',
        // <TextInput> to [passwordState] to axios.data.password
        password: 'cutieY',
      },
    })
      .then( function (response) {
        console.log(response.data)
        setAxiosState(`Route ${uri} returned: ${response.data.email}`)
      })
      .catch( function (error) {
        console.log(error)
      })
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Users Test Routes</Text>

      <Pressable onPress={axiosPressFunction}><Text>{title}</Text></Pressable>
      <Text>{axiosState}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
