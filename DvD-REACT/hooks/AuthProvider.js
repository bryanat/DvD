import * as React from 'react'
import * as SecureStore from 'expo-secure-store'
import { useColorScheme } from 'react-native';

export const AuthContext = React.createContext()

// export default function AuthProvider({ children }) => {
export default function AuthProvider ({ children }) {
  /**
   * Refactor this code from its source
   * updated AuthProvider to use reducer and dispatch actions to control state better
   * since cannot modify the state of userToken directly within another component's nested function
   * this is because calling hooks from within a conditional/control flow state violates the rules of hooks
   */

  const colorScheme = useColorScheme()

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          } ;
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            userId: action.id,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            userId: null,
          };
        case 'DEV_TOKEN':
          return {
            ...prevState,
            userId: action.userId,
          };
        case 'SWAP_COLORSCHEME':
          return {
            ...prevState,
            themeLightOrDark: action.dispatchThemeLightOrDark,
          };
      }
    },
    // below is the state object, think React.useState({ isLoading:true, isSignout:false, userToken:null })
    {
      isLoading: true,
      isSignout: false,
      userId: null,
      userToken: null,
      themeLightOrDark: colorScheme,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      
    };
    bootstrapAsync();
  }, []);

  /**
   * Will implement memoization later, right now it affecting auth state exports
   * resolving useMemo would also resolve SWAP_COLORSCHEME
  `*/
  /*
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  */

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );

}
