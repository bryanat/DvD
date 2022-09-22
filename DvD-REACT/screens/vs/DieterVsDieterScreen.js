
// https://icons.expo.fyi/Ionicons/chatbubble-ellipses-outline
// https://icons.expo.fyi/Ionicons/home-outline
// https://icons.expo.fyi/MaterialCommunityIcons/post-outline

import * as React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from '../../components/Themed'

export default function DieterVsDieterScreen() {
  return (
    <View style={styles.topView}>
      <View style={styles.leftView}>
        <View style={styles.leftTitleView}>
          <Text style={styles.topText}>Left Dieter</Text>
        </View>
      </View>
      <View style={styles.rightView}>
        <View style={styles.rightTitleView}>
          <Text style={styles.topText}>Right Dieter</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    flex: 1,
  },
  leftView: {
    flex: 1,
    flexDirection: 'column',
  },
  rightView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2f95dc',
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  leftTitleView: {
    alignItems: 'center',
  },
  rightTitleView: {
    backgroundColor: '#2f95dc',
    alignItems: 'center',
  },
});
