// Blog Feed : heavily image based, upload picture for foods or exercise
// Blog Feed features : heart(like),  

import * as React from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function BlogfeedScreen() {

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Blog Feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
