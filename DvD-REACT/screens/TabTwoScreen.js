// TabTwoScreen is current basis of VS dieter screen

import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.topView}>
      <View style={styles.leftView}>
        <View style={styles.leftTitleView}>
          <Text style={styles.topText}>User Left</Text>
        </View>
      </View>
      <View style={styles.rightView}>
        <View style={styles.rightTitleView}>
          <Text style={styles.topText}>Adam Levine</Text>
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
