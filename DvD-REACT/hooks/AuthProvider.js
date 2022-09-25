import * as React from 'react'

export const AuthContext = React.createContext()

export default AuthProvider = ({children}) => {
  const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}