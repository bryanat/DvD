import * as React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { View, Text } from './Themed'
import { Svg, Polygon } from 'react-native-svg';

// FUTURE: add arrow with bmi number beneath bmi scale (using react-native-svg and math to calc bmi)
// return male or female bmi image
export default function ImageBMI({sex}) {

  const [imageState, getImageState] = React.useState('../assets/images/bmi-male.png');
  // useEffect with image too?

  const [windowWidth, windowHeight] = [Dimensions.get("screen").width, Dimensions.get("screen").height]
  const aspectRatio = windowWidth/612 //divide by screen width by actual image width (612)

  return (
    <View>
      <Image
        style={{width: windowWidth, height: 346*aspectRatio}} 
        source={sex.toLowerCase() == 'male' ? require('../assets/images/bmi-male.png') : require('../assets/images/bmi-female.png')}
      />
      <Svg width='100%' height='100'>
        <Polygon 
          points='10,10 0,90 200,30'
          fill="lime"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  imageUni: {

  }
})
