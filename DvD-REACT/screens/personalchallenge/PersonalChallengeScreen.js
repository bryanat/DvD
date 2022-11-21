// Personal Challenge

import * as React from 'react'
import { StyleSheet, Pressable, PermissionsAndroid } from 'react-native';
import { Text, View } from '../../components/Themed';
import CameraComponent from '../../components/CameraComponent';
import { Pedometer } from 'expo-sensors'

// user health stats (diet, charts, bmi, calorie history)
export default function PersonalChallengeScreen({ navigation }) {

  // const [stepsState, setStepsState] = React.useState(0)
  // const [isPedometerReadyState, setIsPedometerReadyState] = React.useState('')

  // Pedometer.isAvailableAsync()
  //   .then(
  //     result => setIsPedometerReadyState(String(result))
  //   )

  // React.useEffect(() => {
  //   trackPedometer()
  // }, [])

  // function trackPedometer() {
  //   const subscription = Pedometer.watchStepCount(
  //     result => setStepsState(result.steps)
  //   )
  // }

  const [pedomaterAvailability, setPedomaterAvailability] = React.useState("");
  const [stepCount, setStepCount] = React.useState(0);

  React.useEffect(() => {
    subscribe();
  }, []);

  const subscribe = () => {
    Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
    });
    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedomaterAvailability(String(result));
      },
      (error) => {
        setPedomaterAvailability(error);
      }
    );
  };

  const pressCheckPermissions = async () => {
    const {status} = await Pedometer.requestPermissionsAsync()
    if (status === 'granted') {
      Pedometer.watchStepCount((result) => {
        setStepCount(result.steps);
      });
      console.log('this worked??')
      // setIsCameraStartedState(true)
    } else {
      Alert.alert('Access denied')
    }
  }

  const requestActivityPermission = async () => {
    console.log('request permissions trying')
    try {
      console.log('avx')
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      console.log('asjdkaj')
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('perma granted')
      } else {
        console.log('perma denied')
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // function pressCheckPermissions() {
  //   console.log('ww')
  //   const {status} = Pedometer.requestPermissionsAsync()
  //   console.log(Pedometer.getPermissionsAsync())
  //   console.log('xx')
  // }


  return (
    <View style={styles.topView}>
      <CameraComponent />
      <Text style={styles.topText}>Personal Challenges</Text>
      <Text style={styles.topText}>Step Tracker</Text>
      <Text style={styles.topText}>{stepCount}</Text>
      <Text style={styles.topText}>Pedometer is ready: {pedomaterAvailability}</Text>
      <Pressable onPress={pressCheckPermissions} style={{backgroundColor: '#aaaaaa'}}>
        <Text style={styles.topText}>Check Permissions</Text>
      </Pressable>
      <Pressable onPress={requestActivityPermission} style={{backgroundColor: '#ffaaaa'}}>
        <Text style={styles.topText}>Request Permissions</Text>
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
});
