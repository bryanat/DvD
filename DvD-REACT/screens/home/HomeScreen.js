// Home

import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function HomeScreen({ navigation }) {

  function pressGo() {
    console.log("GOGOGOOGOGGOGO")
    navigation.navigate('ExerciseScreen')
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Home Screen</Text>
      <Pressable style={styles.goButton} onPress={pressGo}>
        <Text style={styles.goText}>GO</Text>
      </Pressable>
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
  goButton: {
    backgroundColor: '#E63946',
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '90%',
    right: '43%',

  },
  goText: {
    fontSize: 20,
    color: '#ffffff',
    marginLeft: -1,
    marginTop: -2,
  },
});
