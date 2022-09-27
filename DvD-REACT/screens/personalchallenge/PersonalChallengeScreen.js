// Personal Challenge

import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

// user health stats (diet, charts, bmi, calorie history)
export default function PersonalChallengeScreen({ navigation }) {

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Personal Challenges</Text>
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
