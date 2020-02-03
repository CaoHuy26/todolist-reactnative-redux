import React from 'react';
import TabNavigator from './TabNavigator';
import { createAppContainer } from 'react-navigation';

// const RootStack = createStackNavigator({
//   Home: ToDoListManager
// });


const AppNavigation = createAppContainer(TabNavigator);

export default AppNavigation;
