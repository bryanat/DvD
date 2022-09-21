import * as React from 'react'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState()
  const [loadingState, setLoadingState] = React.useState()

  const signIn = async () => {
    // Below is where can impliment TextInput to get username password
    // if username and password match set authstate to true
    const _authState = true
    // textinput setUsernameState(usernameFromTextInput)
    // textinput setPasswordState(passwordFromTextInput)

    setAuthState(_authState)
  }

  const signOut = async() => {
    setAuthState(undefined)
  }

  return (
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )

}