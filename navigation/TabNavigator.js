import React from 'react';
import { StyleSheet, Image } from 'react-native';

import ToDoListManager from '../components/TodoListManager';
import SaveScreen from '../screens/SaveScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { createBottomTabNavigator } from 'react-navigation-tabs';

const RouteConfigs = {
  Todo: {
    screen: ToDoListManager,
    navigationOptions: {
      title: 'TODO',
      tabBarIcon: () => (
        <Image 
          source={require('../assets/navigation/icons8-todo-list-100.png')}
          style={styles.tabBarImage}
        />
      )
    }
  },
  Save: {
    screen: SaveScreen,
    navigationOptions: {
      title: 'SAVE',
      tabBarIcon: () => (
        <Image 
          source={require('../assets/navigation/icons8-save-100.png')}
          style={styles.tabBarImage}
        />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'PROFILE',
      tabBarIcon: () => (
        <Image 
          source={require('../assets/navigation/icons8-cat-profile-100.png')}
          style={styles.tabBarImage}
        />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'SETTINGS',
      tabBarIcon: () => (
        <Image 
          source={require('../assets/navigation/icons8-settings-100.png')}
          style={styles.tabBarImage}
        />
      )
    }
  }
};

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }
};

const TabNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
export default TabNavigator;

const styles = StyleSheet.create({
  tabBarImage: {
    width: 26,
    height: 24,
  }
});