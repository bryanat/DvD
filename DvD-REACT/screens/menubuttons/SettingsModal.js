// Settings

import * as React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { View, Text } from '../../components/Themed'
import { AuthContext } from '../../hooks/AuthProvider'

export default function SettingsModal() {
  const { isAuthenticated, setIsAuthenticated, token, setToken } = React.useContext(AuthContext)


  function pressSignOut() {
    // remove auth token 
    //setToken(undefined)
    setToken('', '')
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Settings</Text>
      <Pressable style={styles.signOut} onPress={pressSignOut}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  topView: {
    flex: 1
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  signOut: {
    padding: 10,
    backgroundColor: '#457B9D'
  }
})
