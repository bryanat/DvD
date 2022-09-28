// Notifications 

import * as React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from '../../components/Themed'

export default function NotificationsModal() {
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Notifications</Text>
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
