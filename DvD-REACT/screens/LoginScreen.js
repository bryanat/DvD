import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import AxiosButtonPut from '../components/AxiosButtonPut';

export default function CreateUserScreen({ navigation }) {
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Create User</Text>
      <AxiosButtonPut title="Create User" uri="http://192.168.1.214:8088/users/putUser" />
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
