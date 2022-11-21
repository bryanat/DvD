import * as React from 'react'
import { Camera, CameraType } from 'expo-camera'

export default function CameraComponent() {
  
  const [isCameraStartedState, setIsCameraStartedState] = React.useState(false)
  const [type, setType] = React.useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();

  const pressStartCamera = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      setIsCameraStartedState(true)
    } else {
      Alert.alert('Access denied')
    }
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.topView}>
      {isCameraStartedState ? 
        (
          <Camera style={styles.cameraStyle} type={type}></Camera>
        ) : 
        (
          <View style={styles.cameraView}>
            <TouchableOpacity onPress={pressStartCamera} style={styles.cameraStartButton}>
              <Text style={styles.cameraText}>Take picture</Text>
            </TouchableOpacity>
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
  },
  cameraStyle: {
    flex: 1,width:"100%"
  },
  cameraView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraStartButton: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#14274e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  cameraText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
})