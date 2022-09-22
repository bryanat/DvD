// gonna delete these AxiosButton components cause they seem to cause some confusion

import * as React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Text, View } from './Themed'
import axios from 'axios'

export default function AxiosButtonGet({uri, title}) {
  const [axiosState, setAxiosState] = React.useState("Axios get with email data")

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
        /*
        setAxiosState(`
        user created:
        name: ${response.data.name}
        age: ${response.data.age}
        height: ${response.data.weight}
        weight: ${response.data.height}
        `)
        */
        //setAxiosState(response.data.name)
      })
      .catch( function (error) {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={axiosPressFunction}><Text>{title}</Text></Pressable>
      <Text>{axiosState}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})