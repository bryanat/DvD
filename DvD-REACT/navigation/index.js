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
import { Pressable, useColorScheme } from 'react-native';
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
import IntroDataScreen from '../screens/authlogin/IntroDataScreen';
import ExerciseScreen from '../screens/home/ExerciseScreen';

import AuthProvider from '../hooks/AuthProvider';
import { AuthContext } from '../hooks/AuthProvider';
import IntroDataProvider from '../hooks/IntroDataProvider';
import { IntroDataContext } from '../hooks/IntroDataProvider';


// FUTURE: next step is to get colorScheme working with AuthProvider wrapper / default export
//// 1 current problem: if auth is default export, then auth context doesnt work / is undefined 
//// 2 current problem: if colorscheme is not default export, then colorscheme doesnt work
//// 3 current problem: have to put colorscheme in NavigationContainer (only NavigationContainer has theme prop)
//// below is a way that solves 123 if can get Navigation to conditionally render via a ternary operator
export default function AuthNavigation({ colorScheme}) {
  return (
    <AuthProvider>
      <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <SwitchStackNavigators/>
      </NavigationContainer>
    </AuthProvider>
  )
}

export function SwitchStackNavigators({ ...props }) {
  if (React.useContext(AuthContext).isAuthenticated) {
    return (<RootNavigator/>)
  } else { 
    return (<AuthenticationNavigator/>)
  }
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function AuthenticationNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="IntroDataScreen" component={IntroDataScreen} options={{ headerShown: false }} />
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
    </HomeStack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={32} color={color} style={{ marginBottom: -3 }} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
            <Pressable
              onPress={() => navigation.navigate('Friendslist')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons
                name="people-outline"
                size={25}
                color={Colors[colorScheme].text}
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
                color={Colors[colorScheme].text}
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
                color={Colors[colorScheme].text}
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
