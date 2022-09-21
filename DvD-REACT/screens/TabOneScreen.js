// this is becoming future home screen

import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import AxiosButtonGet from '../components/AxiosButtonGet';
import AxiosButtonPut from '../components/AxiosButtonPut';

export default function TabOneScreen({ navigation }) {
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Users CRUD</Text>
      <AxiosButtonGet title="/users/getUser" uri="http://192.168.1.214:8088/users/getUser" />
      <AxiosButtonPut title="/users/putUser" uri="http://192.168.1.214:8088/users/putUser" />

      <AxiosButtonGet title="/logins/getLoginTest" uri="http://192.168.1.214:8088/logins/getLoginTest" />
      <AxiosButtonGet title="/logins/putLoginTest" uri="http://192.168.1.214:8088/logins/putLoginTest" />
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
