// GroupChat
// reason why: they can make group to share the info

import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Summary from '../../components/HomePage/Summary';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>TODAY</Text>
      <Summary />
      
      {/* <View style={{
          flex: 1,
          width: 500,
          height: 100,
        }} />
        <View style={{
          flex: 1,
          width: 500,
          height: 100,
        }} />
        <View style={{
          flex: 1,
          width: 500,
          height: 100,
        }} />
        <View style={{
          flex: 1,
          width: 500,
          height: 100,
        }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  topText: {
    padding: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
});
