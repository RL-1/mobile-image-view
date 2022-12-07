import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Screen} from '../components/Screen';
import {Main} from './Main';
import {ImageViewer} from './ImageViewer';
export const Screens = () => {
  const AppStack = createStackNavigator();
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          animation: 'none',
          headerShown: false,
        }}>
        <AppStack.Screen name={Screen.Main} component={Main} />
        <AppStack.Screen name={Screen.ImageViewer} component={ImageViewer} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
