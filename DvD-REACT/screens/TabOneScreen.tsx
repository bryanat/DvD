import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AxiosButtonGet from '../components/AxiosButtonGet';
import AxiosButtonPut from '../components/AxiosButtonPut';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users CRUD</Text>
      <AxiosButtonGet title="/getUser" uri="http://192.168.1.214:8088/users/getUser" />
      <AxiosButtonPut title="/putUser" uri="http://192.168.1.214:8088/users/putUser" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
