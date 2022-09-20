import * as React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Text, View } from './Themed'
import axios from 'axios'

export default function AxiosButtonGet({uri, title}) {
  const [axiosState, setAxiosState] = React.useState("Get Axios (before)")

  function axiosPressFunction() {
    axios.get(uri)
      .then( function (response) {
        console.log(response.data)
        const returnedUser = response.data
        setAxiosState(`
        user created:
        name: ${response.data.name}
        age: ${response.data.age}
        height: ${response.data.weight}
        weight: ${response.data.height}
        `)
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