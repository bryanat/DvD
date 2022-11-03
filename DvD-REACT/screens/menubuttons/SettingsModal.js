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

  const [isDarkState, setSwitchState] = React.useState();
  const [darkSwitchState, setDarkSwitchState] = React.useState();
  
  function pressSignOut() {
    dispatch({type: 'SIGN_OUT'})
  }

  function pressLightDark() {
    console.log('light dark button called.')
    setDarkSwitchState(previousState => !previousState)
    dispatch({ type: 'SWAP_COLORSCHEME' })
  }

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Settings</Text>
      <Pressable style={styles.signOut} onPress={pressSignOut}>
        <Text>Sign Out</Text>
      </Pressable>

      <Pressable style={styles.signOut} onPress={pressLightDark}>
        <Text>Change Light to Dark</Text>
      </Pressable>

      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.topText, styles.colorSchemeText]}>Light</Text>
        <Switch 
          trackColor={{ false: "#f7a6a4", true: "#457B9D" }}
          thumbColor={isDarkState ? "#faf3ee" : "#faf3ee"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={pressLightDark}
          value={darkSwitchState}
        />
        <Text style={[styles.topText, styles.colorSchemeText, {fontWeight: 'bold'}]}>Dark</Text>
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
