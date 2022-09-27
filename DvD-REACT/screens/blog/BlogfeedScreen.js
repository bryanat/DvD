// Blog Feed : heavily image based, upload picture for foods or exercise
// Blog Feed features : heart(like),  

import * as React from 'react'
import { StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function BlogfeedScreen() {

  //objects will be fetched (axios) from api call (express route to retrieve mongo object)
  //MOCK data objects below resemble mongo objects structure
  //{ _id: '874928374', user: 'john doe', calorieHistory: [{time: 312983238, weight: 165}, {time: 312238723, calories: 1590}], postHistory: [{time: 312034398, imageid: '63336600950cbc5a159b027a'}, {time: 312844398, imageid: '632d5969ae1b2bb20331a536'}, ]},
  const [contentItemsState, setContentItemsState] = React.useState({ postHistory: [
    //{time: 312034398, imageid: '63336600950cbc5a159b027a'}, 
    //{time: 312844398, imageid: '632d5969ae1b2bb20331a536'}
    {time: 312034398, imageid: require('../../assets/tmp-blog-images/IMG20220927131428.jpg')},
    {time: 312034398, imageid: require('../../assets/tmp-blog-images/IMG20220927151227.jpg')},
    {time: 312034398, imageid: require('../../assets/tmp-blog-images/IMG20220927175244.jpg')},
    //{time: 312034398, imageid: require('../../assets/tmp-blog-images/hashbrowns-test-image-reformat.jpg')},
  ]})

  // FUTURE: abstract this into a <SquareImage src={'../path/to/image'}/> component
  const [screenWidth, screenHeight] = [Dimensions.get('screen').width, Dimensions.get('screen').height]
  const aspectRatio = screenWidth/3120 //divide actual image width (824) by screen width
  const imageHeight = 4160*aspectRatio //multiple actual image height (825) by aspect ratio

  function ItemFormat({ item }) {
    return (
      //FUTURE: Image source={item.imageid} will be a res.download from express based on mongo image meta *imageid* matching actual image data stored on disk in format *_id*.jpg
      //FUTURE: format unix timestamp into Data Time format: Month Day Year
      <View style={styles.topView}>
        <View style={{height: screenHeight*0.5}}>
          <Image style={{width: screenWidth, height: imageHeight}} source={item.imageid}/>
        </View>
        <Text>unix timestamp: {item.time}</Text>
      </View>
    )
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Blog Feed</Text>
      <FlatList 
        data={contentItemsState.postHistory}
        renderItem={ItemFormat}
      />
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
  blogImage: {
    flex: 1,
    resizeMode: 'contain',
},
});
