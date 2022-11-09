// Settings

// NOTE: signout dispatch action is broken right now due to error: undefined in not an object (evaluating 'state.userToken') in index.js
// this error is caused in index.js because state becomes undefined (not even an object)
// RESOLVE: by figuring out why state becomes undefined in index.js after SignOut
// try using useMemo in AuthProvider.js?
import * as React from 'react'
import { StyleSheet, Pressable, Switch } from 'react-native'
import { View, Text } from '../../components/Themed'
import { AuthContext } from '../../hooks/AuthProvider'


export default function SettingsModal() {
  const { state, dispatch } = React.useContext(AuthContext)

  const [darkSwitchState, setDarkSwitchState] = React.useState(true);
  
  function pressSignOut() {
    dispatch({type: 'SIGN_OUT'})
  }

  function pressLightDark() {
    console.log('switch light dark button called.')
    setDarkSwitchState(previousState => !previousState)
    let whatever = darkSwitchState ? 'light' : 'dark'
    dispatch({ type: 'SWAP_COLORSCHEME', dispatchThemeLightOrDark: whatever })
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Settings</Text>
      <Pressable style={styles.signOut} onPress={pressSignOut}>
        <Text>Sign Out</Text>
      </Pressable>

      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.topText, styles.colorSchemeText, darkSwitchState ? {} : {fontSize : 26}]}>Light</Text>
        <Switch 
          trackColor={{ true: "#f8f8f8", false: "#333333" }}
          thumbColor={darkSwitchState ? "#333333" : "#f8f8f8"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={pressLightDark}
          value={darkSwitchState}
        />
      <Text style={[styles.topText, styles.colorSchemeText, darkSwitchState ? {fontSize : 26} : {}]}>Dark</Text> 
      </View>
      <Text>{darkSwitchState ? 'dark' : 'light'}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  topView: {
    flex: 1
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  colorSchemeText: {
    marginTop: 10,
  },
  signOut: {
    padding: 10,
    backgroundColor: '#457B9D'
  }
})
