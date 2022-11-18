/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { Pressable } from 'react-native';
import { View } from '../components/Themed'
import Colors from '../constants/Colors';

import FriendslistModal from '../screens/menubuttons/FriendslistModal';
import NotificationsModal from '../screens/menubuttons/NotificationsModal';
import SettingsModal from '../screens/menubuttons/SettingsModal';
import NotFoundScreen from '../screens/NotFoundScreen';
import DieterVsDieterScreen from '../screens/vs/DieterVsDieterScreen'
import LinkingConfiguration from './LinkingConfiguration';
import BlogfeedScreen from '../screens/blog/BlogfeedScreen';
import PersonalChallengeScreen from '../screens/personalchallenge/PersonalChallengeScreen';
import PersonalStatsScreen from '../screens/personalchallenge/PersonalStatsScreen';
import HomeScreen from '../screens/home/HomeScreen';
import GroupchatScreen from '../screens/chat/GroupchatScreen';
import LoginScreen from '../screens/authlogin/LoginScreen';
import OnboardingScreen from '../screens/authlogin/OnboardingScreen';
import SignupScreen from '../screens/authlogin/SignupScreen';
import ExerciseScreen from '../screens/home/ExerciseScreen';
import SignupScreen1 from '../screens/authlogin/signupflow/SignupScreen1';
import SignupScreen2 from '../screens/authlogin/signupflow/SignupScreen2';
import SignupScreen3 from '../screens/authlogin/signupflow/SignupScreen3';
import SignupScreen4 from '../screens/authlogin/signupflow/SignupScreen4';
import SignupScreen5 from '../screens/authlogin/signupflow/SignupScreen5';
import SearchPage from '../screens/search/SearchPage';
import AuthProvider from '../hooks/AuthProvider';
import { AuthContext } from '../hooks/AuthProvider';
import Nutrient from '../components/HomePage/Nutrient';
import * as SecureStore from 'expo-secure-store'


export default function AuthNavigation() {
  return (
    <AuthProvider>
        <SwitchStackNavigators/>
    </AuthProvider>
  )
}

// Probably will delete SwitchStackNavigators
export function SwitchStackNavigators() {
  const { state, dispatch } = React.useContext(AuthContext);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={state.themeLightOrDark == 'dark' ? DarkTheme : DefaultTheme}
      >
        {state.userToken == null ? (
          <AuthenticationNavigator/>
        ) : (
          <RootNavigator/>
        )}
    </NavigationContainer>
  )        

  // if (authState) violates rules of hooks: don't call hooks inside conditions
  // if (authState.userToken = null) {
  //   return (<RootNavigator/>)
  // } else { 
  //   return (<AuthenticationNavigator/>)
  // }

  //if (React.useContext(AuthContext).token._3 (//mongo ObjectId stored in token) == mongo ObjectId stored in SecureStore ) {
  //if (React.useContext(AuthContext).token._3 == res.body.id ) {
  //if (React.useContext(AuthContext).token._3 == '635c90b27d2c3098af42b94a') {
  // if (React.useContext(AuthContext).token._3 != null) {
  //   console.log('===AuthContext Below for RootNav===')
  //   console.log(React.useContext(AuthContext).token)
  //   console.log("===SecureStore BELOW (RootNav)====")
  //   console.log(SecureStore.getItemAsync('token29'))
  //   //if (React.useContext(AuthContext).token._3 == SecureStore.getItemAsync(token._3)) {
  //   // console.log("BEFORE")
  //   // console.log(React.useContext(AuthContext).token)
  //   // console.log("AFTER")
  //   return (<RootNavigator/>)
  // } else { 
  //   console.log('===AuthContext Below for AuthNav==')
  //   console.log(React.useContext(AuthContext).token)
  //   console.log("===SecureStore BELOW (AuthNav)==")
  //   console.log(SecureStore.getItemAsync('token29'))
  //   return (<AuthenticationNavigator/>)
  // }
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function AuthenticationNavigator() {
  console.log('entered auth navigator')
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen1" component={SignupScreen1} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen2" component={SignupScreen2} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen3" component={SignupScreen3} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen4" component={SignupScreen4} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen5" component={SignupScreen5} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Friendslist" component={FriendslistModal} />
        <Stack.Screen name="Notifications" component={NotificationsModal} />
        <Stack.Screen name="Settings" component={SettingsModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="ExerciseScreen" component={ExerciseScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="SearchScreen" component={SearchPage} />
    </HomeStack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const { state, dispatch } = React.useContext(AuthContext);
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[state.themeLightOrDark].tint,
      }}>
      <BottomTab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={32} color={color} style={{ marginBottom: -3 }} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', backgroundColor: Colors[state.themeLightOrDark].background }}>
            <Pressable
              onPress={() => navigation.navigate('Friendslist')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons
                name="people-outline"
                size={25}
                color={Colors[state.themeLightOrDark].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Notifications')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons
                //name=() => bell-plus-outline if notifications
                name="notifications-outline"
                size={25}
                color={Colors[state.themeLightOrDark].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Settings')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons
                name="settings-outline"
                size={25}
                color={Colors[state.themeLightOrDark].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="Blogfeed"
        component={BlogfeedScreen}
        options={{
          title: 'Blog',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='post-outline' size={32} color={color} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen
        name="VS"
        component={DieterVsDieterScreen}
        options={{
          title: 'Duel',
          tabBarIcon: ({ color }) => <Entypo name='align-horizontal-middle' size={32} color={color} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen 
        name='Personal'
        component={PersonalTopTabsNavigator}
        options={{
          title: 'Personal ',
          tabBarIcon: ({ color }) => <Ionicons name='fitness-outline' size={32} color={color} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen
        name='Groupchat'
        component={GroupchatScreen}
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <Ionicons name='chatbox-ellipses-outline' size={32} color={color} style={{ marginBottom: -3 }} />
        }}
      />
    </BottomTab.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

function PersonalTopTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Personal Challenge" 
        component={PersonalChallengeScreen}
        options={{
          title:'Personal Challenge'
        }}
      />
      <Tab.Screen 
        name="Personal Stats" 
        component={PersonalStatsScreen}
        options={{
          title:'Personal Stats'
        }}
      />
    </Tab.Navigator>
  )
}
