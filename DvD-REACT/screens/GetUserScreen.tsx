import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AxiosButtonGet from '../components/AxiosButtonGet';

export default function GetUserScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return (
    <View style={styles.container}>
      <View style={styles.viewWeight}>
        <Text>Weight</Text>
      </View>
      <View style={styles.viewBMI}>
        <Text>BMI</Text>
      </View>
      <View style={styles.viewCalories}>
        <Text>Calories</Text>
      </View>
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
  viewWeight: {
    backgroundColor: '#0000ff',
    flex: 1,
    width: '100%',
  },
  viewBMI: {
    backgroundColor: '#00ff00',
    flex: 1,
    width: '100%',
  },
  viewCalories: {
    backgroundColor: '#ff0000',
    flex:1,
    width: '100%',
  }
});
