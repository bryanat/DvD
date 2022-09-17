import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AxiosButtonGet from '../components/AxiosButtonGet';

export default function GetUserScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get User</Text>
      <AxiosButtonGet title="/getUser" uri="http://192.168.1.214:8088/users/getUser" />
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
