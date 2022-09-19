import * as React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { View, Text } from './Themed'

// Return male or female BMI image
export default function ImageBMI({sex} : {sex: string}) {

  const [imageState, getImageState] = React.useState<string>('../assets/images/bmi-male.png');
  // useEffect with image too?

  const [windowWidth, windowHeight] = [Dimensions.get("screen").width, Dimensions.get("screen").height]
  const aspectRatio = windowWidth/612 //divide by screen width by actual image width (612)

  return (
    <View>
      <Image style={{width: windowWidth, height: 346*aspectRatio}} 
             source={sex.toLowerCase() == 'male' ? require('../assets/images/bmi-male.png') : require('../assets/images/bmi-female.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageUni: {

  }
})
