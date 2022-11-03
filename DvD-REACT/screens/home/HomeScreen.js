// GroupChat
// reason why: they can make group to share the info

import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Summary from '../../components/HomePage/Summary';
import Nutrient from '../../components/HomePage/Nutrient';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.topView}>
      <Text style={styles.topText}>TODAY</Text>
      <Summary />
      <Nutrient />
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column'
  },
  topText: {
    padding: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
});
