// Friendslist 

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';

export default function ModalScreen() {

  /*
  // for future reference axios calls with auth headers to fetch specific friendslist

  import { useAuth0 } from '@auth0/auth0-react';

  const ExternalApi = () => {
  const [message, setMessage] = useState('');
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getUserTokenSilently } = useAuth0();

  const axiosSecureApiCall = async () => {
    try {
      const token = await getUserTokenSilently();

      // change from fetch call to axios call, leaving below as reference
      const response = await fetch(
        `${serverUrl}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };
  */

  return (
    <View style={styles.topView}>
      <Text style={styles.topText}>Modal</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
