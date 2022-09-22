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
import { ColorSchemeName, Pressable, useColorScheme } from 'react-native';
import { View } from '../components/Themed'

import Colors from '../constants/Colors';
import FriendslistModal from '../screens/menubuttons/FriendslistModal';
import NotificationsModal from '../screens/menubuttons/NotificationsModal';
import SettingsModal from '../screens/menubuttons/SettingsModal';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import CreateUserScreen from '../screens/CreateUserScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import LinkingConfiguration from './LinkingConfiguration';
import LoginScreen from '../screens/authlogin/LoginScreen';
import GetUserScreen from '../screens/GetUserScreen';
import BlogfeedScreen from '../screens/blog/BlogfeedScreen';
import PersonalchallengeScreen from '../screens/personalchallenge/PersonalchallengeScreen';
import GroupchatScreen from '../screens/chat/GroupchatScreen';
import OnboardingScreen from '../screens/authlogin/OnboardingScreen';

import AuthProvider from '../hooks/AuthProvider';

export default function Navigation({ colorScheme }) {
  // need to impliment const AuthContext = React.createContext
  let isAuthenticated = false

  return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {isAuthenticated ? <RootNavigator /> : <AuthenticationNavigator />}
      </NavigationContainer>
  );
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


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TopTabUserNavigator}
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
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Duel',
          tabBarIcon: ({ color }) => <Entypo name='align-horizontal-middle' size={32} color={color} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen 
        name='Personalchallenge'
        component={PersonalchallengeScreen}
        options={{
          title: 'Personal Challenge',
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

function TopTabUserNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login Screen" component={LoginScreen} />
      <Tab.Screen name="Get User" component={GetUserScreen} />
    </Tab.Navigator>
  )
}
