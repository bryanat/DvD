// Personal Challenge

import * as React from 'react'
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import { AuthContext } from '../../hooks/AuthProvider';
import axios from 'axios'
import { localIpAddress } from '../../constants/Network';

// user health stats (diet, charts, bmi, calorie history)
export default function PersonalProfile({ navigation }) {
  const { state, dispatch } = React.useContext(AuthContext)

  const [dataState, setDataState] = React.useState()

  React.useEffect(() => {
    console.log('PersonalProfile.js useEffect hit')
    //axios call
  })

  function pressGetAll(){
    console.log('axios getall called')
    axios.get(`http://${localIpAddress}:8088/users/userdata/getwholeuserobject`)
      .then( function() {
        console.log(response)
        setDataState(response)
      })
      .catch( function(error) {
        console.log(error)
      })
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Personal Profile</Text>
      <Pressable onPress={pressGetAll} style={styles.pressableStyle}>
        <Text>Get all</Text>
      </Pressable>
      <Text style={styles.topText}>Personal Profile</Text>
      <Text style={styles.topText}>Weight</Text>
      <Text style={styles.topText}>Height</Text>
      <Text style={styles.topText}>Personal Profile</Text>
      <Text style={styles.topText}>Personal Profile</Text>
      <Text style={styles.topText}>Personal Profile</Text>
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
  pressableStyle: {
    backgroundColor:'#457B9D',
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom:10,
    padding:10 
  },
});
