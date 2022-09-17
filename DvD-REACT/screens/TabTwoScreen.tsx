import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <View style={styles.leftTitleView}>
          <Text style={styles.title}>User Left</Text>
        </View>
      </View>
      <View style={styles.rightView}>
        <View style={styles.rightTitleView}>
          <Text style={styles.title}>User Right</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftView: {
    flex: 1,
    flexDirection: 'column',
  },
  rightView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2f95dc',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    
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
