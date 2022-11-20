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

  const [userdataState, setUserdataState] = React.useState({})

  React.useEffect(() => {
    console.log('PersonalProfile.js useEffect hit')
    //axios call
    console.log('axios getall called')
    axios.get(`http://${localIpAddress}:8088/users/userdata/getwholeuserobject/${state.userId}`)
      .then( function(response) {
        console.log('faith is cool')
        console.log(response.data)
        setUserdataState(response.data)
      })
      .catch( function(error) {
        console.log(error)
      })
  }, [])

  function pressUpdateUserdata(){
    console.log('axios getall called')
    axios.get(`http://${localIpAddress}:8088/users/userdata/getwholeuserobject/${state.userId}`)
      .then( function(response) {
        console.log('faith is cool')
        console.log(response.data)
        setUserdataState(response.data)
      })
      .catch( function(error) {
        console.log(error)
      })
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Personal Profile</Text>
      <Pressable onPress={pressUpdateUserdata} style={styles.pressableStyle}>
        <Text>Update User Data (dev test button)</Text>
      </Pressable>
      <Text style={styles.topText}>id: {userdataState._id}</Text>
      <Text style={styles.topText}>Name: {userdataState.name}</Text>
      <Text style={styles.topText}>Height: {userdataState.height}</Text>
      <Text style={styles.topText}>Weight: {userdataState.weight}</Text>
      <Text style={styles.topText}>Goal Weight: {userdataState.goalweight}</Text>
      <Text style={styles.topText}>Goal: {userdataState.goal}</Text>
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
