import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function CreateUserScreen({ navigation }) {
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Create User</Text>
</View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
