// Blog Feed : heavily image based, upload picture for foods or exercise
// Blog Feed features : heart(like),  

import * as React from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import * as SecureStore from 'expo-secure-store'

export default function BlogfeedScreen() {

  // just testing some securestore stuff here
  // alternative to expo-secure-store = @react-native-async-storage/async-storage
  // https://www.npmjs.com/package/@react-native-async-storage/async-storage
  async function setSecureStore(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getSecureStore(key) {
    let data = await SecureStore.getItemAsync(key)
    return (result ? `Retrieved: ${data}` : `No data saved under ${key}`)
  }

  const [keyState, getKeyState] = React.useState('key')
  const [valueState, getValueState] = React.useState('value')

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Blog Feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    flex: 1,
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
