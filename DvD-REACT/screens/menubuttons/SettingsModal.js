// FriendsList : 
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from '../../components/Themed'

export default function SettingsModal() {
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Settings</Text>
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
  }
})
