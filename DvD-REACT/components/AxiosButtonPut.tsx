import * as React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Text, View } from './Themed'
import axios from 'axios'

export default function AxiosButtonPut({uri, title}: {uri: string, title: string}) {
  const [axiosState, setAxiosState] = React.useState<String>("Put Axios (before)")

  function axiosPressFunction() {
    axios.put(uri, {
      name: "Justin Timberlake",
      age: 36,
      weight: 168,
      height: 73,
      color: '#ff0000'
    })
      .then( function (response: any) {
        console.log(response.data)
        const returnedUser = response.data
        setAxiosState(response.data.log ?? "undefined")
      })
      .catch( function (error: any) {
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