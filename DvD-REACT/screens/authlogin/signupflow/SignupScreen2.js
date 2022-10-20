/**
 * SignupScreen2
 * : gather user data regarding health diet and objective
 * : data will be used in future recommender system (ML)
 */

import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';

export default function SignupScreen2({navigation}) {
  function pressableNext() {
    navigation.navigate('SignupScreen3')
  }
  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>What is your goal?</Text>
      <Pressable onPress={pressableNext} style={styles.nextPressable}>
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
  },
  topText: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
  },
  nextPressable: {
    width:"40%",
    backgroundColor:"#457b9d",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  nextText: {

  }
});
