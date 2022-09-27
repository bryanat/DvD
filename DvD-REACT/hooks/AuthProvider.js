import * as React from 'react'

export const AuthContext = React.createContext()

export default AuthProvider = ({children}) => {
  const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);

  /*
  // just testing some securestore stuff here
  // alternative to expo-secure-store = @react-native-async-storage/async-storage
  // https://www.npmjs.com/package/@react-native-async-storage/async-storage
  async function setSecureStore(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  async function getSecureStore(key) {
    let data = await SecureStore.getItemAsync(key)
    return (result ? `Retrieved: ${data}` : `No data saved under ${key}`)
  }
  const [keyState, getKeyState] = React.useState('key')
  const [valueState, getValueState] = React.useState('value')
  */

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}