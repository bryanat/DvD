// Get User History ~ similar to Personal Challenge screen
// may remove this screen as its basically just a long term view of Personal Challenge screen
// can put the long term view in Personal Challenge which also lets you see past challenge snapshots (final summaries)

import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import AxiosButtonGet from '../components/AxiosButtonGet';
import AxiosButtonPut from '../components/AxiosButtonPut';

export default function TabOneScreen() {
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Users Test Routes</Text>
      <AxiosButtonGet title="/users/getUser" uri="http://192.168.1.214:8088/users/getUser" />
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
