import * as React from 'react'
import * as SecureStore from 'expo-secure-store'

export const AuthContext = React.createContext()

export default AuthProvider = ({children}) => {
  const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);
  const [ token, setToken ] = React.useState(SecureStore.getItemAsync('token1'))

  //setToken(SecureStore.getItemAsync('token1'))
  
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, token, setToken }}>  
    {children}
    </AuthContext.Provider>
  )
}