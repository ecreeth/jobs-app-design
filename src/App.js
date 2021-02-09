/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';

import {
  BookmarkScreen,
  JobDetailScreen,
  JobScreen,
  SettingScreen,
  NewJobScreen,
  UserScreen,
} from './screens';
import {StatusBar, View} from 'react-native';
import {
  AddIcon,
  BookmarkIcon,
  LogoIcon,
  NotificationIcon,
  SettingIcon,
  ShareIcon,
  UserIcon,
} from './components';
import HomeIcon from './components/icons/Home';

enableScreens();

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function JobStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', marginRight: 12}}>
              <NotificationIcon style={{marginRight: 10}} />
              <ShareIcon />
            </View>
          );
        },
        headerTitle: LogoIcon,
        title: 'Lista de empleos',
        headerStyle: {
          backgroundColor: '#f8f2ee',
        },
      }}>
      <HomeStack.Screen name="Jobs" component={JobScreen} />
      <HomeStack.Screen name="JobsDetail" component={JobDetailScreen} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar backgroundColor="#f8f2ee" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => (
            <BlurView
              blurType="dark"
              overlayColor="transparent"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
              }}>
              <BottomTabBar {...props} />
            </BlurView>
          )}
          tabBarOptions={{
            showLabel: false,
            keyboardHidesTabBar: true,
            style: {
              elevation: 0,
              shadowOpacity: 0,
              borderWidth: 0,
              backgroundColor: 'transparent',
            },
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: HomeIcon,
            }}
            name="JobsTab"
            component={JobStackScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: BookmarkIcon,
            }}
            name="BookmarkTab"
            component={BookmarkScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: AddIcon,
            }}
            name="NewJobScreen"
            component={NewJobScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: SettingIcon,
            }}
            name="SettingsTab"
            component={SettingScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: UserIcon,
            }}
            name="UserTab"
            component={UserScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
