// GroupChat
// reason why: they can make group to share the info

import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function GroupchatScreen() {
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Group Chat</Text>
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
