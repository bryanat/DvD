// Personal Challenge

import * as React from 'react'
import { StyleSheet, Pressable, Image } from 'react-native';
import { Text, View } from '../../components/Themed';
import { AuthContext } from '../../hooks/AuthProvider';
import axios from 'axios'
import { localIpAddress } from '../../constants/Network';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

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
      <View style={{alignItems: 'center'}}>
        <Image style={styles.avatarImage} source={{uri: `http://${localIpAddress}:8088/users/getavatar/${state.userId}`}}/>
        <Text style={styles.nameText}>{userdataState.name}</Text>
      </View>
      <View style={styles.heightweightView}>
        <View style={styles.heightweightSubview}>
          <MaterialCommunityIcons name="scale-bathroom" size={32} color="white" />
          <Text style={styles.heightweightLabelText}>Weight</Text>
          <Text style={styles.heightweightAmountText}>{userdataState.weight} lbs</Text>
        </View>
        <View style={styles.heightweightSubview}>
          <MaterialCommunityIcons name="human-male-height-variant" size={32} color="white" />
          <Text style={styles.heightweightLabelText}>Height</Text>
          <Text style={styles.heightweightAmountText}>{userdataState.height} in</Text>
        </View>
        <View style={styles.heightweightSubview}>
          {userdataState.gender == 'male' ? <Foundation name="male" size={32} color="white" /> : <Foundation name="female" size={32} color="white" /> }
          <Text style={styles.heightweightLabelText}>Gender</Text>
          <Text style={styles.heightweightAmountText}>{userdataState.gender}</Text>
        </View>
      </View>
      <Pressable onPress={pressUpdateUserdata} style={styles.pressableStyle}>
        <Text>Update User Data (dev test button)</Text>
      </Pressable>
      <Text style={styles.topText}>id: {userdataState._id}</Text>
      <Text style={styles.topText}>Goal: {userdataState.goal}</Text>
      <Text style={styles.topText}>Goal Weight: {userdataState.goalweight}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heightweightView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  heightweightLabelText: {
    fontSize: 16,
  },
  heightweightAmountText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heightweightSubview: {
    flex: 1,
    alignItems: 'center',
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

