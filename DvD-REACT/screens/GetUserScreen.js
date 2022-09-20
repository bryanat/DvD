// Get User History ~ similar to Personal Challenge screen
// may remove this screen as its basically just a long term view of Personal Challenge screen
// can put the long term view in Personal Challenge which also lets you see past challenge snapshots (final summaries)

import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function GetUserScreen() {
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Get User Health History</Text>
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
