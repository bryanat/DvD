import * as React from 'react'
import * as SecureStore from 'expo-secure-store'

export const AuthContext = React.createContext()

export default AuthProvider = ({children}) => {
  /*
  // change the string inside React.useState(SecureStore.getItemAsync('STRING') to 'token' when done with development of SignupScreens 
  // --the string from AuthProvider.js in SecureStore.getItemAsync('STRING') need to match the string in LoginScreen.js line setToken(SecureStore.getItemAsync('STRING'))
  */
  console.log('=== AuthProvider.js REGULAR hit ===')
  const [ token, setToken ] = React.useState(SecureStore.getItemAsync('nulltoken'))
  const [loading, setLoading] = React.useState(true)
  /*
  // just testing some securestore stuff here
  // alternative to expo-secure-store = @react-native-async-storage/async-storage
  // https://www.npmjs.com/package/@react-native-async-storage/async-storage
  async function setSecureStore(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  async function getSecureStore(key) {st [keyState, getKeyState] = React.useState('key')
  const [valueState, getValueState] = React.useState('value')
    let data = await SecureStore.getItemAsync(key)
    return (result ? `Retrieved: ${data}` : `No data saved under ${key}`)
  }
  const [keyState, getKeyState] = React.useState('key')
  const [valueState, getValueState] = React.useState('value')
  */

  React.useEffect(() => {
    console.log('=== AuthProvider.js useEffect hit ===')

    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
      setToken( await SecureStore.getItemAsync('token'))
  }

  return (
    <AuthContext.Provider value={{ loading, setLoading, token, setToken }}>  
    {children}
    </AuthContext.Provider>
  )
}